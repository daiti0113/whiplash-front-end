import React, {useEffect, useContext, useState, useMemo} from "react"
import {makeStyles} from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import requestAPI from "../api"
import {images} from "../../assets/images/index"
import Rating from "@material-ui/lab/Rating"
import Pagination from "@material-ui/lab/Pagination"
import {store} from "../store"
import {Link} from "react-router-dom"


// eslint-disable-next-line max-lines-per-function
const useStyles = makeStyles(theme => ({
    list: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: "inline"
    },
    listItem: {
    // height: '70px',
    },
    itemDetail: {
        listStyle: "none",
        padding: 10
    },
    evaluationCount: {
        marginLeft: "10px"
    },
    itemImage: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    link: {
        width: "100%",
        height: "100%",
        textDecoration: "none",
        color: "black"
    },
    pagination: {
        "& > ul": {
            display: "block",
            textAlign: "center",
            "& > li": {
                "display": "inline-block"
            }
        }
    }
}))

const calcLastPage = (itemCount, perPage) => itemCount%perPage !== 0 ? Math.floor(itemCount/perPage)+1 : Math.floor(itemCount/perPage)

export default function ItemList() {
    const classes = useStyles()
    const [items, setItems] = useState([])
    const [foundItems, setFoundItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const {state} = useContext(store)
    const {conditions, order} = state
    const perPage = 10

    useEffect(() => {
        const fetchData = async() => {
            const response = await requestAPI("GET", "/item")
            setItems(response.data)
            setFoundItems(response.data)
        }
        fetchData()
    }, []) // 第２引数の変数が更新されると、フックが実行される(APIへのリクエストを行う)。

    useEffect(() => {
        if (conditions.keywords === "") {
            setFoundItems(items)
        } else {
            setFoundItems(searchItems())
        }
    }, [conditions])

    useEffect(() => {
        setFoundItems(sortItems(order))
    }, [order])

    const searchItems = () => {
        const checkedManufacturerChoices = Object.entries(conditions.manufacturer).map(choice => choice[1].checked ? choice[1].display : false).filter(choice => choice)
        const checkedMaterialChoices = Object.entries(conditions.material).map(choice => choice[1].checked ? choice[1].display : false).filter(choice => choice)
        const checkedTipMaterialChoices = Object.entries(conditions.tipMaterial).map(choice => choice[1].checked ? choice[1].display : false).filter(choice => choice)
        const checkedTipShapeChoices = Object.entries(conditions.tipShape).map(choice => choice[1].checked ? choice[1].display : false).filter(choice => choice)
        const checkedTaperChoices = Object.entries(conditions.taper).map(choice => choice[1].checked ? choice[1].display : false).filter(choice => choice)

        const result = items.filter((item) => {
            // APIの返却値(item.***)はキャメルケースであることに注意。
            if (checkedManufacturerChoices.length && checkedManufacturerChoices.indexOf(item.manufacturer) === -1) return false
            if (checkedMaterialChoices.length && checkedMaterialChoices.indexOf(item.material) === -1) return false
            if (checkedTipMaterialChoices.length && checkedTipMaterialChoices.indexOf(item.tip_material) === -1) return false
            if (checkedTipShapeChoices.length && checkedTipShapeChoices.indexOf(item.tip_shape) === -1) return false
            if (checkedTaperChoices.length && checkedTaperChoices.indexOf(item.taper) === -1) return false
            if (item.price < conditions.price[0] || item.price > conditions.price[1]) return false
            if (item.length < conditions.length[0] || item.length > conditions.length[1]) return false
            if (item.thickness < conditions.thickness[0] || item.thickness > conditions.thickness[1]) return false
            if (item.evaluation < conditions.evaluation) return false
            if (item.evaluation_count < conditions.evaluationCount) return false
            for (let key in item) {
                if (!conditions.keywords || String(item[key]).indexOf(conditions.keywords) !== -1) return true
            }
        })
        return result
    }

    const sortItems = (order) => {
        const compareFunc = {
            "EVALUATION_DESC": (a, b) => a.evaluation < b.evaluation ? 1 : -1,
            "PRICE_ASC": (a, b) => a.price > b.price ? 1 : -1,
            "PRICE_DESC": (a, b) => a.price < b.price ? 1 : -1,
            "EVALUATION_COUNT_DESC": (a, b) => a.evaluation_count < b.evaluation_count ? 1 : -1

        }
        return Object.assign([], foundItems).sort(compareFunc[order])
    }

    const handlePagination = (e, page) => {
        setCurrentPage(page-1)
        scrollTo(0, 0)
    }

    const listItems = useMemo(() => foundItems.slice(currentPage*perPage, currentPage*perPage+perPage).map(item =>
        <React.Fragment key={item.id}>
            <ListItem className={classes.listItem} alignItems="flex-start">
                <Link to={`/item/${item.id}`} className={classes.link}>
                    <ListItemAvatar>
                        <Avatar className={classes.itemImage} src={images[item.name]} variant="rounded">{item.name}</Avatar>
                    </ListItemAvatar>
                    <ul className={classes.itemDetail}>
                        <li key={`name-${item.id}`}>{item.name}</li>
                        <li key={`manufacturer-${item.id}`}>{item.manufacturer}</li>
                        <li key={`evaluation-${item.id}`}>
                            <Rating
                                name="simple-controlled"
                                value={item.evaluation}
                                precision={0.1}
                                size="small"
                            />
                            <span>{item.evaluation}</span>
                            <span className={classes.evaluation_count}>{item.evaluation_count}reviews</span>
                        </li>
                        <li key={`price-${item.id}`}>&yen;{item.price}~</li>
                    </ul>
                </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    ), [foundItems, currentPage])

    return (
        <div>
            <List className={classes.list}>
                {listItems}
            </List>
            <Pagination onChange={handlePagination} page={currentPage+1} count={calcLastPage(foundItems.length, perPage)} shape="rounded" className={classes.pagination} />
        </div>
    )
}
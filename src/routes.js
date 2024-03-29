import React from "react"
import {Switch, Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Ranking} from "./components/Ranking"
import {Search} from "./components/Search"
import {ItemDetail} from "./components/ItemDetail"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/ranking" children={<Ranking />} />
            <Route path="/search" children={<Search />} />
            <Route path="/item/:id" children={<ItemDetail />} />
        </Switch>
    )
}
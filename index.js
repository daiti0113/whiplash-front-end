import React from "react"
import ReactDOM from "react-dom"
import {AppContainer} from "react-hot-loader"
import "typeface-roboto"
import "@babel/polyfill"
import {BrowserRouter} from "react-router-dom"
import Header from "./src/components/Header"
import Routes from "./src/routes"
import {StateProvider} from "./src/store"
import whyDidYouRender from "@welldone-software/why-did-you-render"
import {makeStyles} from "@material-ui/core/styles"

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "dev") {
    whyDidYouRender(React, {
        trackAllPureComponents: true
    })
    console.log("whyDidYouRender: true")
}

const useStyles = makeStyles(() => ({
    content: {
        marginTop: "10"
    }
}))

function App() {
    const classes = useStyles()

    return (
        <StateProvider>
            <BrowserRouter>
                <Header />
                <div className={classes.content}>
                    <Routes />
                </div>
                {/* <Footer /> */}
            </BrowserRouter>
        </StateProvider>
    )
}

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector("#app"))
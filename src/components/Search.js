import React from "react"
import {ItemList} from "./ItemList"
import {SearchMenu} from "./SearchMenu"
import {SearchInput} from "./SearchInput"

export const Search = () => {
    return (
        <>
            <SearchInput />
            <SearchMenu />
            <ItemList />
        </>
    )
}
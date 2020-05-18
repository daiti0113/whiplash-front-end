import React from "react"
import ItemList from "./ItemList"
import SearchMenu from "./SearchMenu"
import SearchInput from "./SearchInput"
export default function Search() {
    return (
        <>
            <SearchInput />
            <SearchMenu />
            <ItemList />
        </>
    )
}
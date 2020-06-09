import {requestAPI} from "./api"

export const fetchData = (path, useEffect, setStateList, trigger=[]) => {
    useEffect(() => {
        const getRequest = async() => {
            const response = await requestAPI("GET", path)
            await setStateList.forEach(setState => setState(response.data))
        }
        getRequest()
    }, trigger)
}
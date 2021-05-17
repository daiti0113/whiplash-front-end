import axios from "axios"

// eslint-disable-next-line no-undef
const base_url = process.env.API_ROOT

export const requestAPI = (method, endpoint) => {
    let res = {}
    switch(method) {
    case "GET":
        res = axios.get(base_url + endpoint)
        break
    case "POST":
    case "PUT":
    case "DELETE":
        res = ""
        break
    }
    return res
}


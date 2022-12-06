import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL +
        process.env.REACT_APP_BASE_URL_PREFIX,

    // send token -- wishlist, addto cart etc
    headers: { Authorization: localStorage.getItem("token") }
})


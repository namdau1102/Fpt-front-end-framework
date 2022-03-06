import axios from "axios";

export const APIShopGame = axios.create({
    baseURL: "http://localhost:8082"
})
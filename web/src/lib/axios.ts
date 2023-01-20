import axios from "axios";

export const api = axios.create({
    baseURL: `http://192.168.137.232:3000`
});
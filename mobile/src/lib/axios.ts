import axios from "axios";

export const api = axios.create({
    baseURL: `http://${process.env.MY_IP}:3000`
});
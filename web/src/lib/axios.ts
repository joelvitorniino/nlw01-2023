import axios from "axios";
import { config } from "dotenv";

config();

export const api = axios.create({
    baseURL: `http://${process.env.MY_IP}:3000`
});
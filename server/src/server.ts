import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";
import { config } from "dotenv";

config();

const app = fastify();

app.register(cors);
app.register(appRoutes)

app.listen({
    host: process.env.MY_IP,
    port: 3000
})
    .then(() => {
        console.log("Server running on http://localhost:3000/");
    });
import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes)

app.listen({
    port: 3000
})
    .then(() => {
        console.log("Server running on http://localhost:3000/");
    });
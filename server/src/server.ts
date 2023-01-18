import fastify from "fastify";
import cors from '@fastify/cors';
import prisma from "./lib/prisma";

const app = fastify();

app.register(cors);

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany();

    return habits;
});

app.listen({
    port: 3000
})
    .then(() => {
        console.log("Server running on http://localhost:3000/");
    });
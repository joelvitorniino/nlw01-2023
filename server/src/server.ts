import fastify from "fastify";
import { PrismaClient } from '@prisma/client';


const app = fastify();
const prisma = new PrismaClient();

app.get('/', async () => {
    const habits = await prisma.habit.findMany();

    return habits;
});

app.listen({
    port: 3000
})
    .then(() => {
        console.log("Server running on http://localhost:3000/");
    });
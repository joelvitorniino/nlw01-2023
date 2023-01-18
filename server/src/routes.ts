import { FastifyInstance, FastifyRequest } from "fastify";
import { z } from "zod";
import prisma from "./lib/prisma";
import dayjs from 'dayjs';

export async function appRoutes(app: FastifyInstance) {
    app.post('/habits', async (request: FastifyRequest) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })

        const { title, weekDays } = createHabitBody.parse(request.body);

        const today = dayjs().startOf('day').toDate();

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay,
                        }
                    })
                }
            }
        })
    });
}
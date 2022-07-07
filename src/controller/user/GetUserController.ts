import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export type UserParams = {
    email?: string
    id?: string
}

export default class GetUserController {
    async getUser({ email, id }: UserParams): Promise<{ name: string, email:string, password: string }> {
        const user = await prismaClient.user.findUnique({
            where: {
                OR: {
                    id: id,
                    email:email
                }
            },
            select: {
                name: true,
                email: true,
                password: true

            }
        });
    }
}
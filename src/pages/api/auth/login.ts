import { NextApiRequest, NextApiResponse } from "next";
import GetUserController from "../../../controller/user/GetUserController";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    const userController = new GetUserController();
    const { email, password } = req.body;

    const user = userController.getUser({ email});

    if (!user) 
        res.status(401).send({
            msg: "User not found"
        });
    if (user.password == password)
        return res.send({
            success: true
        })
}
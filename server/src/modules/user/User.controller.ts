import { Request, Response } from "express";
import UserService from "./implementations/User.service";

const userService = new UserService();

export default class UserController {

    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const user = await userService.create({ name, email, password });

        return response.status(user.status).json(user.data);
    }

    async signInWithGoogle(request: Request, response: Response): Promise<Response> {
        const { name, email, googleId } = request.body;

        const user = await userService.signInWithGoogle({ name, email, googleId });

        return response.status(user.status).json(user.data);
    }

    async login(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const user = await userService.login({ email, password });

        return response.status(user.status).json(user.data);
    }
}
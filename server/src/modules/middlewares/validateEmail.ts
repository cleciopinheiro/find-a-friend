import { Request, Response, NextFunction } from 'express';

export default class ValidateEmail {
    async validate(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { email } = request.body;

        if (!email) {
            return response.status(400).json({ message: 'Email is required' });
        }

        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(email)) {
            return response.status(400).json({ message: 'Invalid email' });
        }

        next();
    }
}
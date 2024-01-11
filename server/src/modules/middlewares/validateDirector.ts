import { NextFunction, Request, Response } from 'express';

export default class ValidateDirector {
    async validate(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { director } = request.body;

        if (!director) {
            return response.status(400).json({ message: 'Director is required' });
        }

        const directorRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

        if (!directorRegex.test(director)) {
            return response.status(400).json({ message: 'Invalid director' });
        }

        if (director.length < 3) {
            return response.status(400).json({ message: 'director must be at least 3 characters long' });
        }

        next();
    }
}
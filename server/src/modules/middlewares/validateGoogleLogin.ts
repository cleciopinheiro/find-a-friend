import { Request, Response, NextFunction } from 'express';
import UserService from '../user/implementations/User.service';

const userService = new UserService();

export default class ValidateGoogleLogin {
  async validate(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
      const user = await userService.findByEmail(request.body.email);

      if (user.data.googleId) {
          return response.status(401).json({ message: 'You have registered with Google. Please login with Google' });
      }

      next();
  }
}
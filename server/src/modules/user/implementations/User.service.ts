import User from '../../../database/models/UserModel';
import ServiceResponse from '../../interfaces/ServiceResponse';
import IUserService  from './IUserService';
import * as bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default';

export default class UserService implements IUserService {
    async create(data: any): Promise<ServiceResponse> {
        const { name, email, password } = data;

        const userExists = await this.findByEmail(email);

        if (userExists.status === 200) {
            return { status: 400, data: { message: 'User already exists' } };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword  });

        return { status: 201, data: user };
    }
    
    async signInWithGoogle(data: any): Promise<ServiceResponse> {
        const { name, email, googleId } = data;

        const [user, created] = await User.findOrCreate({ where: { email }, defaults: { name, email, googleId } });

        const newUser = user || created;

        const token = sign({id: newUser.id, name: newUser.name, isUser: true}, secret, { subject: newUser.id });

        return { status: 200, data: { token: token, isUser: true  } };
    }
    
    async login(data: any): Promise<ServiceResponse> {
        const { email, password } = data;

        const user = await this.validateLogin(email, password);

        if (user.status === 401 || user.status === 404) {
            return user;
        }
        

        const token = sign({id: user.data.id, name: user.data.name, isUser: true}, secret);

        return { status: 200, data: { token: token, isUser: true  } };
    }
    
    async findByEmail(email: string): Promise<ServiceResponse> {
        const user = await User.findOne({ where: { email } });


        if (!user) {
            return { status: 404, data: { message: 'User not found' } };
        }

        return { status: 200, data: user };
    }
    
    async validateLogin(email: string, password: string): Promise<ServiceResponse> {
        const user = await this.findByEmail(email);

        if (user.status === 404) {
            return user;
        }

        const passwordMatched = await bcrypt.compare(password, user.data.password);

        if (!passwordMatched) {
            return { status: 401, data: { message: 'Incorrect email/password combination' } };
        }

        return { status: 200, data: user.data };
    }
}
import { Injectable } from '@nestjs/common';
import {LoginDto} from 'dto/Login.dto';
import { SignupDto } from 'dto/Signup.dto';
import {IAuthService} from './auth.service.i';

@Injectable()
export class AuthService implements IAuthService {
    // async signup(signupDto: SignupDto): Promise<string> {
    //     const { email, password, name } = signupDto;
    //     return `User ${name} with email ${email} signed up successfully!`;
    // }

    // async login(loginDto: LoginDto): Promise<string> {
    //     const { email, password, name } = loginDto;
    //     return `User ${name} with email ${email} signed up successfully!`;
    // }

    async validateUser(user: any) {
        console.log('User:', user);
        return user; // Lưu vào database nếu cần
    }
}

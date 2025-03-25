import { Body, Controller, Get, Post, Req, Res, UseGuards, HttpStatus, UnauthorizedException  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from 'dto/Signup.dto';
import { AuthGuard } from '@nestjs/passport';
import {LoginDto} from 'dto/Login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly appService: AuthService) {}

    // @Post('signup')
    // signup(@Body() signupDto: SignupDto): Promise<string> {
    //     return this.appService.signup(signupDto);
    // }

    // @Post('login')
    // async login(@Body() login: LoginDto): Promise<string> {
    //     const res =  await this.appService.login(login);
    //     return res.toString();
    // }


    @Get('google') // should forward on frontend
    @UseGuards(AuthGuard('google')) // this guard will guarantee that the user is authenticated, if not it will force user to authenticate
    async googleAuth() {
        return { message: 'Redirecting to Google OAuth...' }; 
    }

    @Get('google/getTokenFromAuthenticationServer') // google fetch to this, and this return respond to frontend
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        console.log('query: ', req.query);
        console.log('authenCode: ', req.query.code, req.user);

        // return { message: 'Login successful', user: req.user };

        if (!req.user) {
            throw new UnauthorizedException('Authentication failed');
        }
    
        return {
            status: HttpStatus.OK,
            message: 'Login successful',
            user: req.user,
        };
    }
}

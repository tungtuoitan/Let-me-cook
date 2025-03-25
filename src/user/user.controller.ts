import { Body, Controller, Get, Post, Req, Res, UseGuards, HttpStatus, UnauthorizedException  } from '@nestjs/common';
import {UserService} from './user.service';
import {UserModel} from '../model/user.model';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get('x')
    x(@Body() userModel: UserModel): string {
        return 'xxxxxxxxxxxxxxx';
    }

    @Post('signup')
    signup(@Body() userModel: UserModel): Promise<string> {
        return this.appService.signup(userModel);
    }

}

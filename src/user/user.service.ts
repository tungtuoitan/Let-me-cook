import { Inject, Injectable } from '@nestjs/common';
import { SignupDto } from 'dto/Signup.dto';
import { IUserService } from './user.service.i';
import { IUserRepository } from './user.repository.i';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject('IUserRepository') private readonly userRepository: IUserRepository
    ) {}

    async signup(userModel: UserModel): Promise<string> {
        const res = await this.userRepository.insertUpdateUser(userModel);
        return res;
    }
}

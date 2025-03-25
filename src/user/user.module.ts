import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../logger.middleware';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserRepository} from './user.repository';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService,
        {
            provide: 'IUserRepository', // Đăng ký interface
            useClass: UserRepository,   // Liên kết với class thực tế
        },
    ],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}

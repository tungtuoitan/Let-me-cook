import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../logger.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport';
import {GoogleStrategy} from './google.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'google' })
    ],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy],
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from 'logger.middleware';
import { AuthModule } from 'auth/auth.module';
import {UserModule} from 'user/user.module';

@Module({
    imports: [
            // TypeOrmModule.forRoot({
            //   type: cts.connectionDB.type,
            //   host: cts.connectionDB.host,
            //   port: cts.connectionDB.port,
            //   username: cts.connectionDB.username,
            //   password: cts.connectionDB.password,
            //   database: cts.connectionDB.database,
            //   synchronize: true, // DONT USE IN PRODUCTION, IT WILL DELETE ALL YOUR DATA 
            //   extra: {
            //     trustServerCertificate: true,
            //   },
            // }),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}

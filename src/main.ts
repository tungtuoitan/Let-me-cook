import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { v4 as uuidv4 } from 'uuid';
import { HttpErrorFilter } from '../http-error.filter';
import * as express from 'express';
import { AppModule } from 'app/app.module';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use(helmet());
    //   app.use(compression()); // compress all responses, increase performance
    //   app.use(cookieParser()); // handle cookies when using cookies to store session data
    //   app.use(bodyParser.json({ limit: '50mb' }));
    //   app.use(csurf({ cookie: true })); // avoid CSRF attacks
    app.useGlobalFilters(new HttpErrorFilter());
    app.use(express.urlencoded({ extended: true }));

    app.use((req: Request, res: Response, next: NextFunction) => {
        req.headers['request-id'] = uuidv4(); // add a unique request id to each request -> easy to debug
        next();
    });

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100, // max 100 requests per 15 minutes
        }),
    );
    await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

const logger = new Logger('GoogleAuth');
logger.log('------------------------------------------Google Auth route triggered');
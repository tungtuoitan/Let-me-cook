import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(HttpException) // only catch HttpException
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        const errorResponse = {
            statusCode: status,
            message: exception.message || null,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
        };

        console.error('💥 Error:', errorResponse); // Log ra console

        response.status(status).json(errorResponse);
    }
}

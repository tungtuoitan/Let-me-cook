import * as sql from 'mssql';
import { Injectable } from '@nestjs/common';
import { cts } from 'cts';

@Injectable()
export class DatabaseService {
    private readonly config = {
        user: cts.connectionDB.username,
        password: cts.connectionDB.password,
        server: cts.connectionDB.server,
        database: cts.connectionDB.database,
        options: {
            encrypt: false, // Set true nếu dùng Azure
            trustServerCertificate: true,
        },
    };
}

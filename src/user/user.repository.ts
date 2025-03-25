import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import { cts } from 'cts';
import {IUserRepository} from './user.repository.i';
import {UserModel} from '../model/user.model';
import {UserRepositoryHelper} from './user.repository.helper';

@Injectable()
export class UserRepository implements IUserRepository   {
    constructor() {}

    async getUsers() {
        try {
            const pool = await sql.connect();
            const request = pool.request();

            const result = await request.execute(cts.procedure.user.getUser);
            return result.recordset;
        } catch (error) {
            console.error('Database Error:', error);
            throw new Error('Database execution failed');
        }
    }

    async insertUpdateUser(userModel: UserModel) {
        try {
            const pool = await sql.connect(
                {
                    server: 'np:\\\\TUNGHOMEPC\\pipe\\MSSQL$MSSQLSERVER05\\sql\\query',
                    database: 'lmc-',
                    options: {
                      trustServerCertificate: true,
                    }
                  });
            const request = pool.request();
            const userTable = UserRepositoryHelper.userModelToTable(userModel);
            request.input('@iv_User', userTable);
            request.output('@ov_ErrorMsg', sql.VarChar(sql.MAX));

            const result = await request.execute(cts.procedure.user.insertUpdateUser);
            if(result.rowsAffected.length > 0) {
                return 'User inserted successfully';
            }
            else {
                return 'User not inserted';
            }
         
        } catch (error) {
            console.error('Database Error:', error);
            throw new Error('Database execution failed');
        }
    }
}

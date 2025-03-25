import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserRepositoryHelper {
    constructor() {}

    public static userModelToTable(userModel: UserModel) {
        const userTable = new sql.Table();
        userTable.columns.add('Id', sql.Int);
        userTable.columns.add('UserName', sql.VarChar(100));
        userTable.columns.add('Password', sql.VarChar(255));
        userTable.columns.add('Email', sql.VarChar(255));
        userTable.columns.add('AccountType', sql.VarChar(255));
        userTable.columns.add('IsActive', sql.bit);
        userTable.columns.add('AvtUrl', sql.NVarChar(500));

        // Thêm dữ liệu từ userModel vào bảng
        userTable.rows.add(
            userModel.id,
            userModel.userName,
            userModel.password,
            userModel.email,
            userModel.accountType,
            userModel.isActive,
            userModel.avtUrl,
        );
        return userTable;
    }
}

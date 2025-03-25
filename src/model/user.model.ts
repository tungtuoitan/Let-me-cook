import { Injectable } from '@nestjs/common';

@Injectable()
export class UserModel {
    id : number;
    userName : string;
    password : string;
    email : string;
    fullName : string;
    accountType: string;
    // phone : string;
    // address : string;
    // role : number;
    isActive : boolean;
    avtUrl : boolean;
}

import {UserModel} from "../model/user.model";

export interface IUserRepository {

     getUsers (): Promise<any>;
     insertUpdateUser (userModel: UserModel): Promise<any>;
}

import {SignupDto} from "dto/Signup.dto"
import {UserModel} from "../model/user.model"

export interface IUserService {
    signup(userModel: UserModel): Promise<string>
    
  }
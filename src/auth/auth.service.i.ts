import {LoginDto} from "dto/Login.dto"
import {SignupDto} from "dto/Signup.dto"

export interface IAuthService {
    // signup(signupDto: SignupDto): Promise<string>
    // login(loginDto: LoginDto): Promise<string>
    validateUser(user: any): Promise<any>
  
    
  }
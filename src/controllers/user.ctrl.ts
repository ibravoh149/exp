import {
    controller,
    httpGet,
    httpHead,
    httpPost,
    httpPut
} from 'inversify-express-utils';
import { inject } from "inversify";
import Types from '../constant/types';
import { UserService } from "../services/user.srv";


@controller('/user')
export class UserController{
    constructor(@inject(Types.UserService) private userService:UserService){}

    @httpGet('/')
    public async getUsers(req:Request, res:Response):Promise<any>{
        let  users = await this.userService.getUsers();
        return users
    }
}
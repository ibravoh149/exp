import {injectable} from 'inversify';
import { User } from "../models";



@injectable()
export class UserService {

    constructor(){
    }

    public async getUsers(){
        return await User.find({})
    }
}
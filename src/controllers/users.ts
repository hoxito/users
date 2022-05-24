import { Context } from "koa";
import { validate, ValidationError } from "class-validator";
import { request, summary, path, body, responsesAll, tagsAll } from "koa-swagger-decorator";
import {  UserData } from "../models/users";
import fs from 'fs'
import { ValidateUser, ValidateUsers } from "../services/users-service";
const mime = require('mime-types')

@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}})
@tagsAll(["User"])
export default class UserController {

    @request("post", "/user")
    @summary("Parses a json file containing a username and a number variable")
    @body(UserData)
    public static async newUser(ctx:any): Promise<void> {
 
    const file:any=ctx.request.files?.user
    // console.log(file)
    var data:UserData[] =[]
    try {
        data=require(file.filepath)
        
    } catch (e) {
        if (e instanceof TypeError) { 
            ctx.body={error:e.message};
                } else if (e instanceof Error) {
                    const error=e.message.split('\\').pop();
            ctx.body={error:error};
        }
        ctx.status=400;
        return
    }
    console.log(file.filepath)
    

    var UsersErrors=ValidateUsers(data)
          ctx.status = 200;
          ctx.body={UsersErrors}

        // console.log('ctx.request.file', ctx.request.files?.user);
        // console.log('ctx.file', ctx.file);
        // console.log('ctx.request.body', ctx.request.body);
    }




}

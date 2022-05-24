
import { validate } from "validate.js";
import { UserData,Constraints } from "../models/users"

export function ValidateUsers(users : UserData[]):UserError[]  {
    var usersErrors: UserError[] =[];
   
    users.forEach( (user) =>{
        var userErrors : UserError={
            Name: "",
            Amount: 0,
            Errors: undefined
        };
        userErrors.Name=user.user
        userErrors.Amount=user.amount
        userErrors.Errors=ValidateUser(user)
        usersErrors.push(userErrors)
        console.log("user : ",user)
        console.log("user errors: ",usersErrors)
    })

    return usersErrors


    }

    export  function ValidateUser(user : UserData) :any{
        console.log("test:",validate(user,Constraints))
    return validate(user,Constraints)
        }

        export type UserError = {
            Name: string;
            Amount: number;
            Errors:any;
          };

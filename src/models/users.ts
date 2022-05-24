
import { IsNotEmpty, Length, IsString, IsNumber, Min, Max, IsInt } from 'class-validator';
 
class UserData {
  user: string;
  
  amount: number;
  
}
var Constraints = {
  user: {
      presence: true,
      length: {
        minimum: 1,
        maximum: 10000,
        tooShort: "needs to have 1 character or more",
        tooLong: "needs to have less than 10000 characters",
      }
  },
  amount: {
      numericality: {
        onlyInteger: true,
        greaterThan: 0,
        lessThanOrEqualTo: 999999,
      }
    }
  };
 
export {UserData,Constraints}
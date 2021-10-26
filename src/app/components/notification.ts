import { User } from "./user";

export class Notification {
    constructor (
        private id? : number,
        private sujet? :String ,
        private description? :String ,
        
         private dateNotification? :Date,
         private user? : User
       

    )  {

    }
}

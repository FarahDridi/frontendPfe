import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../components/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getByUsername(Code: any, token: string) {
    throw new Error('Method not implemented.');
  }

  private addUserUrl="http://localhost:3000/user/add";
  private getOneUserUrl="http://localhost:3000/user/one/"
  private updateUserUrl="http://localhost:3000/user/update_info/"
  private deleteUserUrl="http://localhost:3000/user/remove/"
  constructor(private http:HttpClient) { }

  getAllUsers(){
    let data= this.http.get<any>("http://localhost:3000/user/user");
    return data;
  }

  addUser(user:User){
    return this.http.post<any>(this.addUserUrl,user);
  }

  getOneUser(id:String){
    return this.http.get<any>(this.getOneUserUrl+id);
   }

   updateUser(user:User, id:string){
    return this.http.put<any>(this.updateUserUrl+id,user);
  }

  deleteUser(id:String){
    return this.http.delete<any>(this.deleteUserUrl+id)
  }
  
 

}

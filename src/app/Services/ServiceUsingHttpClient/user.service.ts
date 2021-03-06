import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable(
  {
    providedIn:"root"
  }
)
export class UserService
{
    apiRoot:string = 'https://api.github.com/users';
    
    constructor(private http:HttpClient){}

   
    getUser() {
       
        return this.http.get('https://api.github.com/users');
      }
}
import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'user-comp',
  templateUrl: './user.component.html'
 
})
export class UserComponent {
  users: User[] = [
    { name: "Madhura", age: 20 },
    { name: "Rashmi", age: 20 },
    { name: "Priyanka", age: 20 },
    { name: "Mehul", age: 20 },
    { name: "Mayank", age: 20 },
    { name: "Mahi", age: 20 }
  ]

  searchTerm = ''

  changeProperty() {
    this.users[0].name = "Gokul";
  }

  changeReference() {
    // const refUsers= Object.assign([], this.users);
    // const refUsers= [...this.users];
    const refUsers = this.users.slice();
    refUsers[0].name = "Gokul";
    this.users = refUsers
    console.log(this.users)
  }
}
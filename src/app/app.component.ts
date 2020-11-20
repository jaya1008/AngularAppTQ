import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<div>Hello using Template`,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  ename:string="Jayshree Chaudhary";
  eid:number=101; 

}

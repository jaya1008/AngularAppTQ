import { Component } from '@angular/core';

@Component({
  selector:'sample-app',
   templateUrl:'./sample.component.html' ,
   styleUrls:['./sample.component.css']
})
export class SampleComponent
{
  title:"Two way data binding";
  ename:string="Jayshree Chaudhary";
  msg:string=" ";
  showMsg():void{
      this.msg="Good evening "+this.ename;

  }
}
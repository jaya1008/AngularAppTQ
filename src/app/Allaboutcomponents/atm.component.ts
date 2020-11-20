import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent  {

 amt:number;
 bal:number;
 tr:string;
 error:string;
 flag:boolean=false;
  constructor(){
    this.bal=50000;
  }
  withdraw():void{

    this.tr=" Withdraw ..."
    if(this.amt>this.bal)
      {
        this.error=" Insufficient balance...";
        this.flag=true;
      }
    else
    {
      this.bal=this.bal-this.amt;
      this.flag=false;
    }
  }
  deposit():void{
    this.tr=" Deposit ....";
    this.bal=this.bal+this.amt;
  }
  
}

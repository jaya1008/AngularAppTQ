import { Component, OnInit } from '@angular/core';
import { HelloService } from './Hello.service';

@Component({
  selector: 'app-callservice',
  templateUrl: './callservice.component.html',
  styleUrls: ['./callservice.component.css'],
  providers:[HelloService] 
  // use service locally 
})
export class CallserviceComponent implements OnInit {
 msg:string;
//  dpendenacy Injection to get service Object
  constructor(private serObj:HelloService) { }

  ngOnInit() {
  }
  call():void{
   this.msg= this.serObj.sayHello();
  }
}

import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-pipe',
  templateUrl: './testpipes.component.html'
 
})
export class TestPipes {
  thetitle = 'pipes demo';
 xyz:string="thinkQuotient pvt ltd"
  jd = new Date();
  a: number = 0.259;
  b: number = 12.3495;
  num1: number = 0.208;
  num2: number = 0.10;

  course:any={code: 'C101', name: 'Professional Azure', Fees: '24000',
 technology:'Cloud'};
  bookObj=new Book("Abc",1234);
}

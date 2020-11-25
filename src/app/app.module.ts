import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtmComponent } from './Allaboutcomponents/atm.component';
import { LoginComponent } from './Allaboutcomponents/Login.component';
import { ProductComponentNew } from './Allaboutcomponents/productnew.component';
import { StudentComponent } from './Allaboutcomponents/student.component';
import {DemoBindingsComponent} from './DataBindingDemos/databinding.component'
import {MsgComponent} from './DataBindingDemos/msg.component'
import {DemoTwoWayComponent} from './DataBindingDemos/twoway.component'
import { SampleComponent } from './Allaboutcomponents/sample.component'
import { TestComponent } from './Allaboutcomponents/test.component';
import { TheIfComponent } from './directivedemos/TestIF/testngif.component';
import { SimplecurdProduct } from './crudoperation/crud_operation.component';
import {EmployeeListComponent} from './directivedemos/TestFor/employeeList.component';
import {FilterPipe} from './directivedemos/TestFor/myfilter.pipe';
import { TheSwitchComponent } from './directivedemos/Testswitch/personList.component';
import {DemoAttrComponents} from './directivedemos/attrdemo/attrdemo.component'
import {TestPipes} from './DemoPipes/testpipes'
import { ExponentialStrengthPipe } from './DemoPipes/ExponentialStrengthPipe';
import { HighlightDirective } from './directivedemos/CusrAttrDemo/highlight.directive';
import { AddChildComponent } from './outputdecorator/addchild.component';
import {AddsimpleComponent} from './outputdecorator/addparent.component';
import { ConatctFormComponent } from './FormsDemos/contact.component';
import { ModelContactComponent } from './FormsDemos/modelContact.component';
import { ValidFormComponent } from './FormsDemos/validForm.component';
import { PersonComponent } from './FormsDemos/Person.component';
import { CustomValidatorComp } from './FormsDemos/CustomValidator/customvalid.component';
import { HelloService } from './Services/Hello.service';
@NgModule({
  declarations: [
    AppComponent,AtmComponent,LoginComponent,ProductComponentNew,StudentComponent
    ,DemoBindingsComponent,MsgComponent,DemoTwoWayComponent,
    SampleComponent,TestComponent,TheIfComponent,SimplecurdProduct,EmployeeListComponent,
    FilterPipe,TheSwitchComponent,DemoAttrComponents,HighlightDirective,TestPipes,
    ExponentialStrengthPipe,MsgComponent,AddChildComponent,AddsimpleComponent,
    ConatctFormComponent,ModelContactComponent,ValidFormComponent,
    PersonComponent,CustomValidatorComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

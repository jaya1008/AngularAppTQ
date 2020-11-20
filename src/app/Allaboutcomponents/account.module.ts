import { NgModule } from '@angular/core';
import { AtmComponent } from './atm.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
@NgModule({
    declarations:[AtmComponent],
    imports:[FormsModule,CommonModule],
    providers:[],
    exports:[AtmComponent],
    bootstrap:[]
})
export class AccountModule{

}
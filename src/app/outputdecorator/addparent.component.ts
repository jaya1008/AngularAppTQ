import { Component } from '@angular/core';

@Component({
    selector: 'parent-add',
    templateUrl: './addparent.component.html',
})
export class AddsimpleComponent {
    msg: number = 0;

    onNotify(message: number): void {
        
        this.msg =  message;
    }
}



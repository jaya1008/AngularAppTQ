import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-child',
    templateUrl: './addchild.component.html',
    styleUrls: [ ]
})
export class AddChildComponent {

    @Output() add: EventEmitter<number> = new EventEmitter<number>();

    num1:number;
    num2:number;
    onClick(): void {
        
        this.add.emit(this.num1+this.num2);
    }
}

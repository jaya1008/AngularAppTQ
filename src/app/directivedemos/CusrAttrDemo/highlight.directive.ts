import { Directive, ElementRef } from '@angular/core';
// <p myHighlight> Some text here</p>
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    //dependency injection
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';

    }
}
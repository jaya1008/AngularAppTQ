import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'about-item',
    template: `<h3 style=color:Purple>On the About Item Id: {{selectedTr}}</h3>`
})
export class AboutItemComponent {
    id: any;
    paramsSub: any;
    public selectedTr: string;
    constructor(private activatedRoute: ActivatedRoute) { }
    private ngOnInit() {
        this.paramsSub = 
        this.activatedRoute.params.subscribe
        (params => {
            this.selectedTr = params['id'];
        });
        // this.route.paramMap.subscribe((params: ParamMap) => {
        //     let id = parseInt(params.get('id'));
        //     this.departmentId = id;
      
        //   });
    }
    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
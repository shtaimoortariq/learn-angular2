import {Component} from '@angular/core';
import {Input} from '@angular/core';


@Component({
    selector: 'view-data',
    template: `
            <h1>View Child</h1>
            <div *ngFor="let thisData of myData; let i = index"> 
                <p>{{myData[i].type}}</p>
            </div>
    `
})

export class ViewDataComponent {
    @Input() myData;
}
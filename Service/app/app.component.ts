import {Component} from '@angular/core';
import {Data} from './data';
import {DataService} from './data.service';
@Component({
    selector: 'my-app',
    template: `
            <h1>Hello Taimoor</h1>
            <p>This Data is from service</p>
            <view-data [myData] = "DataService.myData"></view-data>
    `
})

export class AppComponent {

    constructor(private DataService: DataService) {

    }
}
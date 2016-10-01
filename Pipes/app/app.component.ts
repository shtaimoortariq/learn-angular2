import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>my name is {{ name | uppercase }}</p>
               <p>my name is {{ name1 | lowercase }}</p>
               <p>my name is {{ date | date: 'mediumDate' }}</p>
               `
})

export class AppComponent {
    name = "Taimoor Tariq";
    name1 = "Taimoor Tariq";
    date = new Date();
}
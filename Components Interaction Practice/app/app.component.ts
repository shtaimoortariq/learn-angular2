import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: `<color-picker #refrence (color)= "preview.color = $event"></color-picker>
                <color-preview #preview></color-preview>

                <button (click)="refrence.change('black')" class="button"> Reset </button>
                `
})

export class AppComponent {

}
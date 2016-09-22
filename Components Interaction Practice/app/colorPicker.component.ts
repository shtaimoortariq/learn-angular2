import {Component, Input} from '@angular/core';

@Component({
    selector: 'color-picker',
    moduleId: module.id,
    templateUrl: 'colorPicker.component.html',
    styleUrls: ['colorPicker.component.css']
})

export class ColorPicker {
    @Input()
    color: string;

    change(data: string) {
        this.color = data;
    }
}
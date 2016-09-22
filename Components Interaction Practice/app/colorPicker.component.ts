import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'color-picker',
    moduleId: module.id,
    templateUrl: 'colorPicker.component.html',
    styleUrls: ['colorPicker.component.css']
})

export class ColorPicker {
    @Input()
    color: string;

    @Output('color') newEvent = new EventEmitter();
    
    change(data: string) {
        this.color = data;
        this.newEvent.emit(data);
    }


}
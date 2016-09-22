import {Component, Input} from '@angular/core';

@Component({
    selector: 'color-preview',
    template: `
            <p [ngStyle]="{'color': color}">Color Preview</p>
            `
})

export class ColorPreview {
    @Input() color: string;
}
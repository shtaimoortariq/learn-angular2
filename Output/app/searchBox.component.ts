import {Component, Input} from '@angular/core';

@Component({
    selector: 'Search-Box',
    template: `<input type="text" placeholder="{{text}}"/>
                <button>clear</button>
    `
})

export class SearchBox {
    @Input('placeholder')
    text = "Search Your Text";
}
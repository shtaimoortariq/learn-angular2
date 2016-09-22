import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'Search-Box',
    moduleId: module.id,
    templateUrl: 'searchBox.component.html'
})

export class SearchBoxComponent {
    @Input('myPlaceholder')
    myPlaceholder = "Seach The Text";
    

    @Output() newEvent = new EventEmitter();

    myEvent(event) {
        this.newEvent.emit(event);

    }

    clear(refrence) {
        refrence.value = "";
    }
}
import {Component, Input} from '@angular/core';



@Component({
    selector: 'Search-Box',
    moduleId: module.id,
    templateUrl: 'searchBox.component.html'
})

export class SearchBox {
    @Input('placeholder')
    text = "Search Your Text";

    clear(refrence) {
        refrence.value = "";
        console.log("input");
    }

}
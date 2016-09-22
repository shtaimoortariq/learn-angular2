import {Component} from '@angular/core'


@Component({
    selector: 'my-app',
    template: '<Search-Box myPlaceholder = "Please Search" (newEvent)="theEventFromChild($event)"></Search-Box>'
})

export class RootComponent {
    theEventFromChild(event) {
        alert("The Event From Child");
    }
}
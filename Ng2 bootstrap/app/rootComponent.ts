import {Component} from '@angular/core'
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    template: '<alert type="info">ng2-bootstrap hello world!</alert>'
})
export class RootComponent {

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {RootComponent} from './rootComponent';
import {SearchBox} from './searchBox.component';

@NgModule({

    imports: [BrowserModule, Ng2BootstrapModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]

})

export class AppModule { }
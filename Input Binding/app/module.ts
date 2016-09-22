import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RootComponent} from './rootComponent';
import {SearchBox} from './searchBox.component';

@NgModule({

    imports: [BrowserModule],
    declarations: [RootComponent, SearchBox],
    bootstrap: [RootComponent]

})

export class AppModule { }
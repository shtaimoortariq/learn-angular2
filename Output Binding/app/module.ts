import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RootComponent} from './rootComponent';
import {SearchBoxComponent} from './searchBox.component';

@NgModule({

    imports: [BrowserModule],
    declarations: [RootComponent, SearchBoxComponent],
    bootstrap: [RootComponent]

})

export class AppModule { }
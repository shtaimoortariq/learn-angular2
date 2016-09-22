import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import  {AppComponent} from './app.component';
import {ColorPicker} from './colorPicker.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ColorPicker],
    bootstrap: [AppComponent]
})

export class MainModule {

}
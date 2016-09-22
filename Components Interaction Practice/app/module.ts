import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import  {AppComponent} from './app.component';
import {ColorPicker} from './colorPicker.component';
import {ColorPreview} from './colorPreview.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ColorPicker, ColorPreview],
    bootstrap: [AppComponent]
})

export class MainModule {

}
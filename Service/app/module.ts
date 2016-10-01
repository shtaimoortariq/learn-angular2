import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {ViewDataComponent} from './viewData.component';
import {DataService} from './data.service';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ViewDataComponent],
    bootstrap: [AppComponent],
    providers: [DataService]

})

export class AppModule {

}

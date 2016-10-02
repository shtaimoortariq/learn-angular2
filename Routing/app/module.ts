import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';



import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';
import {OneComponent} from './oneComponent.component';
import {TwoComponent} from './twoComponent.component';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, OneComponent, TwoComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]

})

export class AppModule {

}

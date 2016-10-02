import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h1>Home Page</h1>
                <nav>
                    <a routerLink="/one" routerLinkActive="active">one</a>
                    <a routerLink="/two" routerLinkActive="active">two</a>
                    <router-outlet></router-outlet>

                </nav>
    `
})

export class AppComponent {

}
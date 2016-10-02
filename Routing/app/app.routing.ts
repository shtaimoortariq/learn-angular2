import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {OneComponent} from './oneComponent.component';
import {TwoComponent} from './twoComponent.component';

const appRoutes: Routes = [ 
    {path: 'one', component: OneComponent},
    {path: 'two', component: TwoComponent},
    {path: '', component: OneComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


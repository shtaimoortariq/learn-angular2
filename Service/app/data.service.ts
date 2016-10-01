
import {Injectable} from '@angular/core';
import {Data} from './data';

Injectable()
export class DataService {

    myData = [];
    constructor() {
        this.loadData();
    }

    loadData() {
        this.myData = Data;
    }

}
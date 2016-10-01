"use strict";
var core_1 = require('@angular/core');
var data_1 = require('./data');
core_1.Injectable();
var DataService = (function () {
    function DataService() {
        this.myData = [];
        this.loadData();
    }
    DataService.prototype.loadData = function () {
        this.myData = data_1.Data;
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
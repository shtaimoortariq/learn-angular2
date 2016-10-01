"use strict";
var data_1 = require('./data');
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
//# sourceMappingURL=dataService.js.map
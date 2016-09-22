"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
        this.myPlaceholder = "Seach The Text";
        this.newEvent = new core_1.EventEmitter();
    }
    SearchBoxComponent.prototype.myEvent = function (event) {
        this.newEvent.emit(event);
    };
    SearchBoxComponent.prototype.clear = function (refrence) {
        refrence.value = "";
    };
    __decorate([
        core_1.Input('myPlaceholder'), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "myPlaceholder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBoxComponent.prototype, "newEvent", void 0);
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: 'Search-Box',
            moduleId: module.id,
            templateUrl: 'searchBox.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=searchBox.component.js.map
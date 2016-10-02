"use strict";
var router_1 = require('@angular/router');
var oneComponent_component_1 = require('./oneComponent.component');
var twoComponent_component_1 = require('./twoComponent.component');
var appRoutes = [
    { path: 'one', component: oneComponent_component_1.OneComponent },
    { path: 'two', component: twoComponent_component_1.TwoComponent },
    { path: '', component: oneComponent_component_1.OneComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
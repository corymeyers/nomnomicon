System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var NomComponent;
    return {
        setters:[],
        execute: function() {
            NomComponent = (function () {
                function NomComponent() {
                }
                NomComponent = __decorate([
                    Component({
                        selector: 'nom-display',
                        inputs: ['nom'],
                        template: "\n  <h3>{{ nom.name }} - {{nom.details}} - {{nom.calories}} calories</h3>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NomComponent);
                return NomComponent;
            }());
            exports_1("NomComponent", NomComponent);
        }
    }
});
//# sourceMappingURL=nom.component.js.map
var SomeComponentController = (function () {
    function SomeComponentController() {
        this.textBinding = '';
        this.dataBinding = 0;
    }
    SomeComponentController.prototype.add = function () {
    };
    return SomeComponentController;
}());
angular.module('smartpark').component('someComponent', new SomeComponentController());
//# sourceMappingURL=subscriberController.js.map

interface ISomeComponentController {
    textBinding: string;
    dataBinding: number;
    add(): void;
}

class SomeComponentController implements ISomeComponentController {

    public textBinding: string;
    public dataBinding: number;
        
    constructor() {
        this.textBinding = '';
        this.dataBinding = 0;
    }

    add(): void {
         
    }

}
angular.module('smartpark').component('someComponent', new SomeComponentController());
export class BarSpy {
    constructor() {
        this.calledArgs = [];
    }
    doSomething(value) {
        this.calledArgs.push(value);
    }
}

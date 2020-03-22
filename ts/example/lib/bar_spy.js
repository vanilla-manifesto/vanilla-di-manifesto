"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BarSpy {
    constructor() {
        this.calledArgs = [];
    }
    doSomething(value) {
        this.calledArgs.push(value);
    }
}
exports.BarSpy = BarSpy;

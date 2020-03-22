"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FooBarUser {
    constructor(dependency) {
        this.dependency = dependency;
    }
    danceWithDependencies() {
        const { foo, bar } = this.dependency;
        const fooValue = foo.getSomething();
        bar.doSomething(fooValue);
    }
}
exports.FooBarUser = FooBarUser;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const foo_1 = require("./foo");
const bar_1 = require("./bar");
const foo_bar_user_1 = require("./foo_bar_user");
const foo_stub_1 = require("./foo_stub");
const bar_spy_1 = require("./bar_spy");
(function product() {
    const fooBarUser = new foo_bar_user_1.FooBarUser({
        foo: new foo_1.FooConst(),
        bar: new bar_1.BarNull(),
    });
    fooBarUser.danceWithDependencies();
    console.log("OK - product");
})();
// NOTE: This is an example test code that not depended any test frameworks.
//       You may use test frameworks you like.
(function test() {
    const barSpy = new bar_spy_1.BarSpy();
    const fooBarUser = new foo_bar_user_1.FooBarUser({
        foo: new foo_stub_1.FooStub(1234),
        bar: barSpy,
    });
    fooBarUser.danceWithDependencies();
    assert_1.default.deepStrictEqual(barSpy.calledArgs, [1234]);
    console.log("OK - test");
})();

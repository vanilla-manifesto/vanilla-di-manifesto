import assert from "assert";

import {FooConst} from "./foo";
import {BarNull} from "./bar";
import {FooBarUser} from "./foo_bar_user";

import {FooStub} from "./foo_stub";
import {BarSpy} from "./bar_spy";


(function product() {
  const fooBarUser = new FooBarUser({
    foo: new FooConst(),
    bar: new BarNull(),
  });

  fooBarUser.danceWithDependencies();
})();


// NOTE: This is an example test code that not depended any test frameworks.
//       You may use test frameworks you like.
(function test() {
  const barSpy = new BarSpy();

  const fooBarUser = new FooBarUser({
    foo: new FooStub(1234),
    bar: barSpy,
  });

  fooBarUser.danceWithDependencies();

  assert.deepStrictEqual(barSpy.calledArgs, [1234]);
})();

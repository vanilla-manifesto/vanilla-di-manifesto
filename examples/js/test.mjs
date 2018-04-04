import assert from 'assert';

import {Foo} from './foo';
import {Bar} from './bar';
import {FooBarUser} from './foo_bar_user';

import {FooStub} from './foo_stub';
import {BarSpy} from './bar_spy';


production();
test();


function production() {
  const fooBarUser = new FooBarUser({
    foo: new Foo(),
    bar: new Bar(),
  });

  fooBarUser.danceWithDependencies();
}


function test() {
  const barSpy = new BarSpy();

  const fooBarUser = new FooBarUser({
    foo: new FooStub(1234),
    bar: barSpy,
  });

  fooBarUser.danceWithDependencies();

  assert.deepStrictEqual(barSpy.calledArgs, [1234]);
}

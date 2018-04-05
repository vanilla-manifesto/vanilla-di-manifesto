import {Foo} from "./foo";
import {Bar} from "./bar";


export interface FooBarUserDependency {
  foo: Foo;
  bar: Bar;
}


export class FooBarUser {
  constructor(private dependency: FooBarUserDependency) {}


  danceWithDependencies() {
    const {foo, bar} = this.dependency;
    const fooValue = foo.getSomething();
    bar.doSomething(fooValue);
  }
}

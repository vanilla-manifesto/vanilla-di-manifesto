import {Foo} from "./foo";


export class FooStub implements Foo {
  constructor(public nextValue: number) {}

  getSomething(): number {
    return this.nextValue;
  }
}

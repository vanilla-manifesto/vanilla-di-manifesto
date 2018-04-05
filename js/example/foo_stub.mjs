export class FooStub {
  constructor(firstValue) {
    this.nextValue = firstValue;
  }


  getSomething() {
    return this.nextValue;
  }
}

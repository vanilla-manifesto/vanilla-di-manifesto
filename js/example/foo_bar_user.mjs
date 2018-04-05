export class FooBarUser {
  constructor(dependency) {
    const {foo, bar} = dependency;
    this.foo = foo;
    this.bar = bar;
  }


  danceWithDependencies() {
    const fooValue = this.foo.getSomething();
    this.bar.doSomething(fooValue);
  }
}

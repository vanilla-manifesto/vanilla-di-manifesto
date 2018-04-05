export class FooBarUser {
  constructor(dependency) {
    this.dependency = dependency;
  }


  danceWithDependencies() {
    const {foo, bar} = this.dependency;
    const fooValue = foo.getSomething();
    bar.doSomething(fooValue);
  }
}

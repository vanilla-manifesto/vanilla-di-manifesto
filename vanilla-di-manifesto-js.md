JavaScript with Vanilla DI
==========================

Vanilla DI is one of the implementation approach of [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection).
And also, Vanilla DI is an approach of design.

This approach has the following advantages:

- Extremely simple
- Extremely easy to use
- Zero dependency
- Good debuggability
- Good readability for beginners
- Good portability for most languages
- Good way to layered architecture

For fairness, this approach has the following disadvantages:

- Can't follow completly to DRY
- Maintainability highly depend to design skill

But using Vanilla DI is still a good choice for many situations.



Usage
-----

This approach is extremely simple; **Inject components via the constructors**.

You can achieve it by writing code like the following for each dependent components:

```javascript
// These are depended components.
class X {}
class Y {}

// This is a dependent component.
class Z {
  constructor(dependency) {
	const {x, y} = dependency;
	this.x = x;
	this.y = y;
  }

  doSomething() {
    // Do something with this.x and this.y.
  }
}

// All dependency should be injected when
// the dependent component is constructing.
const z = new Z({
  x: new X(),
  y: new Y(),
});

z.doSomething();
```

That's all.



Example
-------

### Production
#### Depended Components Example

```javascript:foo.mjs
export class Foo {
  getSomething() {
    return 42;
  }
}
```

```javascript:bar.mjs
export class Bar {
  doSomething(value) {
    // Execute something have side-effects
  }
}
```

#### Dependent Components Example

```javascript:foo_bar_user.mjs
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
``` 

#### Injection Example

```javascript:index.mjs
const fooBarUser = new FooBarUser({
  foo: new Foo(),
  bar: new Bar(),
});

fooBarUser.danceWithDependencies();
```



### Test

You can use Vanilla DI with any testing frameworks you like.



#### Test Doubles Example

```javascript:foo_stub.mjs
export class FooStub {
  constructor(firstValue) {
    this.nextValue = firstValue;
  }


  getSomething() {
    return this.nextValue;
  }
}
```

```javascript:bar_spy.js
export class BarSpy {
  constructor() {
    this.calledArgs = [];
  }


  doSomething(value) {
    this.calledArgs.push(value);
  }
}
```



#### Test Case Example

```javascript
const barSpy = new BarSpy();

const fooBarUser = new FooBarUser({
  foo: new FooStub(1234),
  bar: barSpy,
});

fooBarUser.danceWithDependencies();

assert.deepStrictEqual(barSpy.calledArgs, [1234]);
```



Installation
------------

Of course, nothing.



Key Things
----------

There are 2 key things to use easily this approach:

- Command-Query Separation
- Single Responsibility Prinsible


### Command-Query Separation

Command-Query Separation (CQS) is a principle of design.
Vanilla DI becomes hard to use if you don't follow the principle.



### Single Responsibility Prinsiple

Single Responsibility Principle (SRP) is also a principle of design.
Vanilla DI becomes hard to maintain if you don't follow the principle.



FQA
---

### X is the de facto library of JavaScript. So we should use it, right?

Yes and no. It completely depends to your situation.

For example, you should use some DI libraries if the library is already used in your project.
For another example, you should not use any DI libraries if the project is across many languages and project members are not expert for each languages.

It means, using a DI liberary is not always the best solution.
Don't be afraid to be away from DI libraries.



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

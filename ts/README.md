TypeScript with Vanilla DI
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

So, Vanilla DI may not work well if you work on a huge project.
But using Vanilla DI is still a good choice for many situations.



Usage
-----

This approach is extremely simple; **Inject components via the constructors**.

You can achieve it by writing code like the following for each dependent components:

```typescript
// These are depended components.
class X {}
class Y {}

// This is a declaration of direct dependencies.
interface ZDependency {
  x: X;
  y: Y;
}

// This is a dependent component.
class Z {
  constructor(private dependency: ZDependency) {}

  doSomething() {
    const {x, y} = this.dependency;

    // Do something with x and y.
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

```typescript:foo.ts
export interface Foo {
  getSomething(): number;
}


// The name of concrete classes should represent its behavior.
// For ecample, this class return always 42, so we can name it as "-Const".
// But you can still name as "-Impl" or "-Default" if there are no ways.
export class FooConst implements Foo {
  getSomething(): number {
    return 42;
  }
}
```

```typescript:bar.ts
export interface Bar {
  doSomething(value: number): void;
}


// The name of concrete classes should represent its behavior.
// For ecample, this class do nothing, so we can name it as "-Null".
// But you can still name as "-Impl" or "-Default" if there are no ways.
export class BarNull implements Bar {
  doSomething(value: number): void {
    // Do something.
  }
}
```

#### Dependent Components Example

```typescript:foo_bar_user.ts
import {Foo} from "./foo";
import {Bar} from "./bar";


export interface FooBarUserDependency {
  foo: Foo;
  bar: Bar;
}


export class FooBarUser {
  constructor(private dependency: FooBarUserDependency) {}


  danceWithDependencies() {
    const fooValue = this.dependency.foo.getSomething();
    this.dependency.bar.doSomething(fooValue);
  }
}
``` 

#### Injection Example

```typescript:index.ts
const fooBarUser = new FooBarUser({
  foo: new FooConst(),
  bar: new BarNull(),
});

fooBarUser.danceWithDependencies();
```



### Test

You can use Vanilla DI with any testing frameworks you like.



#### Test Doubles Example

```typescript:foo_stub.ts
import {Foo} from "./foo";


export class FooStub implements Foo {
  constructor(public nextValue: number) {}

  getSomething(): number {
    return this.nextValue;
  }
}
```

```typescript:bar_spy.js
import {Bar} from "./bar";


export class BarSpy implements Bar {
  readonly calledArgs: number[] = [];


  doSomething(value: number): void {
    this.calledArgs.push(value);
  }
}

```



#### Test Case Example

```typescript
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

### X is the de facto library of TypeScript. So we should use it, right?

Yes and no. It completely depends to your situation.

For example, you should use some DI libraries if the library is already used in your project.
For another example, you should not use any DI libraries if the project is across many languages and project members are not expert for each languages.

It means, using a DI liberary is not always the best solution.
Don't be afraid to be away from DI libraries.



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

Vanilla DI manifesto
====================

[![CircleCI](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master.svg?style=svg)](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master)

Vanilla DI is one of the implementation approaches of [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection).
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
- Maintainability highly depends on design skill

So, Vanilla DI may not work well if you work on a huge project.
But using Vanilla DI is still a good choice for many situations.



Supported Languages
-------------------

We provide examples for the languages:

- [JavaScript](./js/)
- [TypeScript](./ts/)
- [Swift](./swift/)

However, we always welcome to add examples for other languages above.
Feel free to send a pull request.



Concept
-------

This approach is extremely simple; **Inject depended components via constructors**.

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



Key Things
----------

There are 2 key things to use easily this approach:

- Command-Query Separation
- Single Responsibility Prinsiple


### Command-Query Separation

Command-Query Separation (CQS) is a principle of design.
Vanilla DI becomes hard to use if you don't follow the principle.



### Single Responsibility Prinsiple

Single Responsibility Principle (SRP) is also a principle of design.
Vanilla DI becomes hard to maintain if you don't follow the principle.



FQA
---

### X is the de facto library of Y language. So we should use it, right?

Yes and no. It completely depends to your situation.

For example, you should use some DI libraries if the library is already used in your project.
For another example, you should not use any DI libraries if the project is across many languages and project members are not expert for each languages.

It means, using a DI liberary is not always the best solution.
Don't be afraid to be away from DI libraries.



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

Vanilla DI manifesto
====================

[![CircleCI](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master.svg?style=svg)](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master)

Vanilla DI is one of the implementation approaches of [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection).
And also, Vanilla DI is an approach of design.

This approach has the following advantages:

<dl>
<dt>Advantages</dt>
<dd><ul>
<li>Extremely simple</li>
<li>Extremely easy to use</li>
<li>Dependency-free</li>
<li>Good debuggability</li>
<li>Good readability for beginners</li>
<li>Good portability for most languages</li>
<li>Good way to layered architecture</li>
</ul></dd>
</dl>

For fairness, this approach has the following disadvantages:

<dl>
<dt>Disadvantages</dt>
<dd><ul>
<li>Maintainability highly depends on design skill</li>
</ul></dd>
</dl>

So, Vanilla DI may not work well if you work on a huge project.
But using Vanilla DI is still a good choice for many situations.



Supported Languages
-------------------

We provide examples for the languages:

- [JavaScript](./js/)
- [TypeScript](./ts/)
- [Swift](./swift/)
<!-- TODO: C# -->
<!-- TODO: Go -->

However, we always welcome to add examples for other languages above.
Feel free to send a pull request.



Concept
-------

This approach is extremely simple; **Inject depended components via constructors** (this approach is known as [Constructor Injection](http://xunitpatterns.com/Dependency%20Injection.html#Constructor%20Injection)).

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

- [Command-Query Separation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation)
- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)


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

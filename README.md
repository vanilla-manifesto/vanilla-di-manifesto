Vanilla DI manifesto
====================

[![CircleCI](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master.svg?style=svg)](https://circleci.com/gh/vanilla-manifesto/vanilla-di-manifesto/tree/master)

Vanilla DI is one of the implementation approaches for [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection). And also, Vanilla DI is an approach for design.

This approach has the following pros:

<dl>
<dt>Pros</dt>
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

But it is not a silver bullet, so this approach has the following cons:

<dl>
<dt>Cons</dt>
<dd><ul>
<li>Maintainability highly depends on design skill</li>
</ul></dd>
</dl>

So, Vanilla DI may not work well if you work on a huge project.
But using Vanilla DI is still a good choice for many situations.



Code Examples
-------------------

We provide examples for the languages:

- [JavaScript](./js/)
- [TypeScript](./ts/)
- [Swift](./swift/)
- [C#](./cs/)
- [F#](./fs/)
- [Go](./go/)
- [Python](./py/)
- [Java](./java/)

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



Refactoring Guides of Typical Smells
------------------------------------

If you felt something hard to write constructors or tests, Vanilla DIer should find several design smells.

Because the most important part of Vanilla DI is keen sensitivity of design smells. 
Vanilla DI does not hide any design smells, but DI containers can hides often them.



### Huge Arguments Lists

**Number of arguments of Vanilla DI component should be less as possible.**

Ideally, all components should know only few others (in other words, direct dependencies should be few as possible). You can see a huge arguments list if your code violates the principle. The following code is an example of huge arguments lists:

```javascript
// PROBLEM: This is huge arguments lists.
class SomethingGreatService {
  constructor(foo, bar, fooBar, baz, qux, quux) {
    this.foo = foo
    this.bar = bar
    this.fooBar = fooBar
    this.baz = baz
    this.qux = qux
    this.quux = quux
  }

  // ...
}
```

Understanding the component is hard but also understanding an user of the component is hard (typically you can face it when writing a setup phase of test code):

```javascript
const service = new SomethingGreatService(
  new Foo(),
  new Bar(new Corge()),
  new FooBar(new Grault(new Garply())),
  new Baz(new Waldo()),
  new Qux(),
  new Quux(new Plugh())
);
```

The huge arguments list says that; **some abstraction is needed for depended-on components**.

Vanill DIers should try to encapsulute several depended-on components into an abstraction. The abstraction may be a Dependency Bag describing the next section.



### Fragile Constructors

**Arguments of Vanilla DI components should not be affected by dependent components changes.**

One of a reason to avoid Consructor-Injection is parameters modifications upward call hierarchy. For example:

```javascript
// NOTE: Child class needs to depend on GreetingService.
class Child {
  constructor(fooService, /* TODO: greetingService */) {
    this.fooService = fooService;
    // TODO: this.greetingService = greetingService;
  }

  // ...
}



// PROBLEM: But Parent class does not have GreetingService.
//          Should we add GreetingService to the constructor?
class Parent {
  constructor(fooService) {
    this.child = new Child(fooService);
  }

  // ...
}



// PROBLEM: But also GrandParent class does not have GreetingService.
//          Should we add GreetingService to the constructor too?
class GrandParent {
  constructor(fooService) {
    this.child = new Parent(fooService);
  }

  // ...
}


// ...
```

You can handle the situation by parameter modifications, but it is boring.

Instead, you can achieve it by adding a dependency bag object:

```javascript
// APPROACH: Wrapping several components necessary to instantiate Child into PersionFactoryBag.
class Child {
  constructor(personFactoryBag) {
    const {fooService, greetingService} = personFactoryBag;
    this.fooService = fooService;
    this.greetingService = greetingService;
  }

  // ...
}



// GOOD: The arguments list of Parent does not affect.
class Parent {
  constructor(personFactoryBag) {
    this.child = new Child(personFactoryBag);
  }

  // ...
}



// GOOD: The arguments list of Parent does not affect.
class GrandParent {
  constructor(personFactoryBag) {
    this.child = new Parent(personFactoryBag);
  }

  // ...
}


// ...
```

But should not abuse dependency bags. Abuse of dependency bags lead to violate [Interface Segregation Principle](https://en.wikipedia.org/wiki/Interface_segregation_principle).



FAQ
---

### X is the de facto library of Y language. So we should use it, right?

Yes and no. It completely depends to your situation.

For example, you should use a DI container if it is already used in your project.
For another example, you should not use any DI container if the project is across many languages and project members are not expert for each languages.

It means, using a DI container is not always the best solution.
**Don't be afraid to be away from DI container.**



### What difference between Vanilla-DI and Constructor Injection?

Vanilla DI = Constructor Injection + Phillosophy

The phillosophy is **emphasizing design smells**; Facing something hard to inject means a design smell.



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

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



Concept
-------

See [README.md](/README.md#concept).



Code Examples
-------------

* System under test: [`VanillaDIExample/FooBarUser.cs`](./example/VanillaDIExample/FooBarUser.cs)
* Depended-on Component:
    * [`VanillaDIExample/Foo.cs`](./example/VanillaDIExample/Foo.cs)
    * [`VanillaDIExample/Bar.cs`](./example/VanillaDIExample/Bar.cs)
* Tests: [`VanillaDIExample.Tests/ExampleTest.cs`](./example/VanillaDIExample.Tests/ExampleTest.cs)
* Test Doubles ([Vanilla Mock](https://github.com/vanilla-manifesto/vanilla-mock-manifesto)):
    * [`VanillaDIExample.Tests/FooStub.cs`](./example/VanillaDIExample.Tests/FooStub.cs)
    * [`VanillaDIExample.Tests/BarSpy.cs`](./example/VanillaDIExample.Tests/BarSpy.cs)



Refactoring Guides of Typical Smells
------------------------------------

See [README.md](/README.md#refactoring-guides-of-typical-smells)



FAQ
---

See [README.md](/README.md#faq)



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

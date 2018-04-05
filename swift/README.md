Swift with Vanilla DI
=====================

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

```swift
// These are depended components.
class X {}
class Y {}


// This is a dependent component.
class Z {
    typealias Dependency = (
        x: X,
        y: Y
    )


    init(dependency: Dependency) {
        self.dependency = dependency;
    }


    func doSomething() {
        let (x, y) = this.dependency;

        // Do something with x and y.
    }
}


// All dependency should be injected when
// the dependent component is constructing.
let z = Z(
    dependency: (
        x: X(),
        y: Y()
    )
);

z.doSomething();
```

That's all.



Example
-------

### Production
#### Depended Components Example

```swift:Foo.swift
protocol Foo {
    func getSomething() -> Int
}


// The name of concrete classes should represent its behavior.
// For ecample, this class return always 42, so we can name it as "-Const".
// But you can still name as "-Impl" or "-Default" if there are no ways.
class FooConst: Foo {
    func getSomething() -> Int {
        return 42
    }
}
```

```swift:Bar.swift
protocol Bar {
    func doSomething(value: Int)
}


// The name of concrete classes should represent its behavior.
// For ecample, this class do nothing, so we can name it as "-Null".
// But you can still name as "-Impl" or "-Default" if there are no ways.
class BarNull: Bar {
    func doSomething(value: Int) {
    }
}
```

#### Dependent Components Example

```swift:FooBarUser.swift
class FooBarUser {
    typealias Dependency = (
        foo: Foo,
        bar: Bar
    )


    private let dependency: Dependency


    init(dependency: Dependency) {
        self.dependency = dependency
    }


    func danceWithDependencies() {
        let (foo, bar) = self.dependency

        bar.doSomething(value: foo.getSomething())
    }
}
``` 

#### Injection Example

```swift:Main.swift
const fooBarUser = new FooBarUser({
    foo: new Foo(),
    bar: new Bar(),
});

fooBarUser.danceWithDependencies();
```



### Test

You can use Vanilla DI with any testing frameworks you like.



#### Test Doubles Example

```swift:FooStub.swift
@testable import VanillaDiExample


class FooStub: Foo {
    var nextValue: Int


    init(willReturn firstValue: Int) {
        self.nextValue = firstValue
    }


    func getSomething() -> Int {
        return self.nextValue
    }
}

```

```swift:BarSpy.swift
@testable import VanillaDiExample


class BarSpy: Bar {
    private(set) var calledArgs = [CallArgs]()


    func doSomething(value: Int) {
        self.calledArgs.append(.doSomething(value: value))
    }


    enum CallArgs: Equatable {
        case doSomething(value: Int)


        static func == (_ lhs: CallArgs, _ rhs: CallArgs) -> Bool {
            switch (lhs, rhs) {
            case (.doSomething(value: let l), .doSomething(value: let r)):
                return l == r
            }
        }
    }
}
```



#### Test Case Example

```swift
import XCTest
@testable import VanillaDiExample


final class FooBarUserTests: XCTestCase {
    func testDanceWithDependencies() {
        let barSpy = BarSpy()

        let fooBarUser = FooBarUser(
            dependency: (
                foo: FooStub(willReturn: 1234),
                bar: barSpy
            )
        )

        fooBarUser.danceWithDependencies()

        XCTAssertEqual(barSpy.calledArgs, [
            .doSomething(value: 1234)
        ])
    }
}
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

### X is the de facto library of Swift. So we should use it, right?

Yes and no. It completely depends to your situation.

For example, you should use some DI libraries if the library is already used in your project.
For another example, you should not use any DI libraries if the project is across many languages and project members are not expert for each languages.

It means, using a DI liberary is not always the best solution.
Don't be afraid to be away from DI libraries.



Contributing
------------

Any suggetions are welcome.
Feel free to open issues to discuss about Vanilla DI.

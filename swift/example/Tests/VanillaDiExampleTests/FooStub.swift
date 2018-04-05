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


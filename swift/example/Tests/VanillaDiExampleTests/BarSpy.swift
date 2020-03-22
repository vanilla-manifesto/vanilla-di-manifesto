@testable import VanillaDiExample


class BarSpy: Bar {
    private(set) var calledArgs = [CallArgs]()


    func doSomething(value: Int) {
        self.calledArgs.append(.doSomething(value: value))
    }


    enum CallArgs: Equatable {
        case doSomething(value: Int)
    }
}

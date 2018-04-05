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

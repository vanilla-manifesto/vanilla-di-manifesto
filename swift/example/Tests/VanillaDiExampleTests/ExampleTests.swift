import XCTest
@testable import VanillaDiExample


final class ExampleTests: XCTestCase {
    func testProduction() {
        let fooBarUser = FooBarUser(
            dependency: (
                foo: FooConst(),
                bar: BarNull()
            )
        )

        fooBarUser.danceWithDependencies()
    }


    func testTest() {
        let barSpy = BarSpy()

        let fooBarUser = FooBarUser(
            dependency: (
                foo: FooStub(willReturn: 1234),
                bar: barSpy
            )
        )

        fooBarUser.danceWithDependencies()

        XCTAssertEqual(barSpy.calledArgs, [
            .doSomething(value: 1234),
        ])
    }


    static var allTests = [
        ("testProduction", testProduction),
        ("testTest", testTest),
    ]
}

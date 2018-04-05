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

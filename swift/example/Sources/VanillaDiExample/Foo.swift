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

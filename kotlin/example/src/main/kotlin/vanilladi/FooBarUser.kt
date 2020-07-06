package vanilladi;

class FooBarUser(
    private val foo: Foo,
    private val bar: Bar
) {
    fun danceWithDependencies() {
        bar.doSomething(foo.getSomething());
    }
}

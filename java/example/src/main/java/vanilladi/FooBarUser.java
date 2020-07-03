package vanilladi;

public class FooBarUser {
    private Foo foo;
    private Bar bar;

    public FooBarUser(Foo foo, Bar bar) {
        this.foo = foo;
        this.bar = bar;
    }

    public void danceWithDependencies() {
        bar.doSomething(foo.getSomething());
    }
}

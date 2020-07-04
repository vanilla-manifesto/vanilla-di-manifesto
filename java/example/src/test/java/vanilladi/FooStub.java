package vanilladi;

public class FooStub extends Foo {
    public int nextValue;

    public FooStub(int nextValue) {
        this.nextValue = nextValue;
    }
    
    @Override
    public int getSomething() {
        return nextValue;
    }
}

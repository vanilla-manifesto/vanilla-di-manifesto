package vanilladi;

class FooStub(
    private val nextValue: Int
) : Foo() {
    override fun getSomething(): Int = nextValue;
}

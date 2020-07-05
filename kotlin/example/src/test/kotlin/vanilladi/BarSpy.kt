package vanilladi;

class BarSpy : Bar() {
    private val calledArgs = mutableListOf<Int>();

    fun getCalledArgs(): Iterable<Int> {
        return calledArgs;
    }

    @Override
    override fun doSomething(value: Int) {
        calledArgs.add(value);
    }
}

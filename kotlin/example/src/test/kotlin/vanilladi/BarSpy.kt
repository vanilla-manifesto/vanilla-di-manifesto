package vanilladi;

class BarSpy : Bar() {
    private val calledArgs = mutableListOf<Int>();

    fun getCalledArgs(): Iterable<Int> = calledArgs

    override fun doSomething(value: Int) {
        calledArgs.add(value);
    }
}

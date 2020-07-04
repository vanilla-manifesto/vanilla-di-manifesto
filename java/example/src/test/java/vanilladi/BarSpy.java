package vanilladi;

import java.util.ArrayList;
import java.util.List;

public class BarSpy extends Bar {
    private List<Integer> calledArgs = new ArrayList<>();

    public Iterable<Integer> getCalledArgs() {
        return calledArgs;
    }

    @Override
    public void doSomething(int value) {
        calledArgs.add(value);
    }
}

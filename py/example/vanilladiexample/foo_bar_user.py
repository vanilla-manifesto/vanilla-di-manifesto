from vanilladiexample.foo import Foo
from vanilladiexample.bar import Bar


class FooBarUser:
    def __init__(self, foo: Foo, bar: Bar):
        self.foo = foo
        self.bar = bar

    def dance_with_dependencies(self) -> None:
        self.bar.do_something(self.foo.get_something())
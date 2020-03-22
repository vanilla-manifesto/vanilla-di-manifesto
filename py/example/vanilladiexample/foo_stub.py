from vanilladiexample.foo import Foo


class FooStub(Foo):
    def __init__(self, next_val: int):
        self.next_val = next_val

    def get_something(self) -> int:
        return self.next_val
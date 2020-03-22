from typing import Protocol


class Foo(Protocol):
    def get_something(self) -> int:
        ...


class FooConst(Foo):
    def get_something(self) -> int:
        return 42

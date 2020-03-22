from typing import Protocol


class Bar(Protocol):
    def do_something(self, value: int) -> None:
        ...


class BarNull(Bar):
    def do_something(self, value: int) -> None:
        pass

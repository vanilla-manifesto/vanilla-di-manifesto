from typing import List
from vanilladiexample.bar import Bar


class BarSpy(Bar):
    def __init__(self):
        self.call_args: List[int] = []

    def do_something(self, value: int) -> None:
        self.call_args.append(value)

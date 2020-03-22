import unittest
from vanilladiexample.foo_bar_user import FooBarUser
from vanilladiexample.foo import FooConst
from vanilladiexample.bar import BarNull
from vanilladiexample.bar_spy import BarSpy
from vanilladiexample.foo_stub import FooStub


class ExampleTest(unittest.TestCase):
    def test_test(self):
        bar_spy = BarSpy()

        foo_bar_user = FooBarUser(FooStub(1234), bar_spy)

        foo_bar_user.dance_with_dependencies()

        self.assertEqual(1, len(bar_spy.call_args))

    def test_prod(self):
        foo_bar_user = FooBarUser(FooConst(), BarNull())

        foo_bar_user.dance_with_dependencies()

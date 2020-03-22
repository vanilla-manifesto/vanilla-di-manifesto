package example

import "testing"

func TestFooBarUserTest(t *testing.T) {
	barSpy := &BarSpy{}

	fooBarUser := FooBarUser{
		foo: FooStub{NextValue: 1234},
		bar: barSpy,
	}

	fooBarUser.DanceWithDependencies()

	if len(barSpy.CallArgs) != 1 {
		t.Errorf("got %d, want 1", len(barSpy.CallArgs))
		return
	}
}

func TestFooBarUserProd(t *testing.T) {
	fooBarUser := FooBarUser{foo: &FooConst{}, bar: &BarNull{}}

	fooBarUser.DanceWithDependencies()
}

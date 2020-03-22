package example

type FooStub struct {
	NextValue int
}

var _ Foo = FooStub{}

func (f FooStub) GetSomething() int {
	return f.NextValue
}

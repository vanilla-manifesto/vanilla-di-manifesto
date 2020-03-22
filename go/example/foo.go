package example

type Foo interface {
	GetSomething() int
}

type FooConst struct {}

var _ Foo = FooConst{}

func (FooConst) GetSomething() int {
	return 42
}


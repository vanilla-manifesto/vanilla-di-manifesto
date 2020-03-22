package example

type FooBarUser struct {
	foo Foo
	bar Bar
}

func (u FooBarUser) DanceWithDependencies() {
	u.bar.DoSomething(u.foo.GetSomething())
}

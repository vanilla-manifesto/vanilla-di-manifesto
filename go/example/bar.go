package example

type Bar interface {
	DoSomething(int)
}

type BarNull struct{}

var _ Bar = BarNull{}

func (BarNull) DoSomething(int) {}

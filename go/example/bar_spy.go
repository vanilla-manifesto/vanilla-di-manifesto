package example

type BarSpy struct {
	CallArgs []int
}

var _ Bar = &BarSpy{}

func (b *BarSpy) DoSomething(value int) {
	b.CallArgs = append(b.CallArgs, value)
}

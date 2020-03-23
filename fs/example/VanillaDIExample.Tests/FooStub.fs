namespace VanillaDIExample

type FooStub(nextValue) =

    interface IFoo with
        member __.GetSomething() = nextValue 

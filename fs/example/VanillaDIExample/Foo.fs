namespace VanillaDIExample

type IFoo =
    abstract GetSomething : unit -> int

type Foo() =
    interface IFoo with
        member __.GetSomething() = 42

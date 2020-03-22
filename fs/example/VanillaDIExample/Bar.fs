namespace VanillaDIExample

type IBar =
    abstract DoSomething : int -> unit

type Bar() =
    interface IBar with
        member __.DoSomething _value = ()

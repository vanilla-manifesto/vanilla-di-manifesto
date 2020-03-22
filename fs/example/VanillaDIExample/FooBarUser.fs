namespace VanillaDIExample

type FooBarUser(foo : IFoo, bar : IBar) =

    member __.DanceWithDependencies() =
        foo.GetSomething()
        |> bar.DoSomething

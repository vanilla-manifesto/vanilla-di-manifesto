module VanillaDIExample.Tests

open Swensen.Unquote
open Xunit

let [<Fact>] TestProduction() =

    let fooBarUser = FooBarUser(Foo(), Bar())
    
    // does not throw
    fooBarUser.DanceWithDependencies()

/// As F# is a .NET language, yu can do it like in C#
/// (in fact you can compile these tests against the C# version too)
module LikeCSharp =
        
    let [<Fact>] TestTest() =

        let barSpy = BarSpy()

        let fooBarUser = FooBarUser(FooStub(1234), barSpy)

        fooBarUser.DanceWithDependencies()

        test <@ 1 = barSpy.CalledArgs.Count @>

/// F# has good intrinsic support for spinning up stubs and mocks
module WithObjectExpressions =
        
    let [<Fact>] TestTest() =

        let fooStub = { new IFoo with member __.GetSomething () = 1234 }

        let mutable calledArgs = ResizeArray()
        let barSpy = 
            { new IBar with
                member __. DoSomething value = calledArgs.Add value }

        let fooBarUser = FooBarUser(fooStub, barSpy);

        fooBarUser.DanceWithDependencies();

        test <@ [1234] = List.ofSeq calledArgs @>

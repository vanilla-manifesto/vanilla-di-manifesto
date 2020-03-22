namespace VanillaDIExample

type BarSpy() =
    
    member val CalledArgs = ResizeArray() with get
    
    interface IBar with
        member __.DoSomething(value) =
            __.CalledArgs.Add value

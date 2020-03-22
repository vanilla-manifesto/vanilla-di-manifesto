namespace VanillaDIExample
{
    public class FooBarUser
    {
        private IFoo Foo { get; }
        private IBar Bar { get; }

        public FooBarUser(IFoo foo, IBar bar) => (Foo, Bar) = (foo, bar);


        public void DanceWithDependencies()
        {
            Bar.DoSomething(Foo.GetSomething());
        }
    }
}
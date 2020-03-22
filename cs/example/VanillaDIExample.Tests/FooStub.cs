namespace VanillaDIExample
{
    public class FooStub : IFoo
    {
        public int NextValue { get; set; }

        public FooStub(int nextValue) => NextValue = nextValue;

        public int GetSomething() => NextValue;
    }
}
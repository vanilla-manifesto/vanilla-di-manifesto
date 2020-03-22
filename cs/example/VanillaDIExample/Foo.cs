namespace VanillaDIExample
{
    public interface IFoo
    {
        public int GetSomething();
    }



    public class Foo : IFoo
    {
        public int GetSomething() => 42;
    }
}
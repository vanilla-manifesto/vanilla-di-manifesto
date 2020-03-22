using NUnit.Framework;



namespace VanillaDIExample
{
    public class ExampleTest
    {
        [Test]
        public void TestProduction()
        {
            var fooBarUser = new FooBarUser(new Foo(), new Bar());

            Assert.DoesNotThrow(() => { fooBarUser.DanceWithDependencies(); });
        }


        [Test]
        public void TestTest()
        {
            var barSpy = new BarSpy();

            var fooBarUser = new FooBarUser(new FooStub(1234), barSpy);

            fooBarUser.DanceWithDependencies();

            Assert.AreEqual(1, barSpy.CalledArgs.Count);
        }
    }
}
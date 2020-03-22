using System.Collections.Generic;



namespace VanillaDIExample
{
    public class BarSpy : IBar
    {
        public List<int> CalledArgs => calledArgs;
        private List<int> calledArgs = new List<int>();


        public void DoSomething(int value)
        {
            calledArgs.Add(value);
        }
    }
}
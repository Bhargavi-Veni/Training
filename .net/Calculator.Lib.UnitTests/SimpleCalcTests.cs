using System;
using Xunit;
using Calculator.Lib;

namespace Calculator.Lib.UnitTests
{
    public class SimpleCalcTests
    {
        [Fact]
        public void Sum_ShouldCorrectValue()
        {
            var simpleCalc = new SimpleCalc();
            var sum = simpleCalc.Sum(1,2);
            Assert.Equal(3, sum); 
        }
        [Fact]
        public void Sub_ShouldCorrectValue()
        {
            var simpleCalc = new SimpleCalc();
            var sub = simpleCalc.Sub(2,1);
            Assert.Equal(1, sub);
        }
        [Fact]
         public void Mul_ShouldCorrectValue()
        {
            var simpleCalc = new SimpleCalc();
            var mul = simpleCalc.Mul(1,2);
            Assert.Equal(2, mul);
        }
        [Fact]
         public void Div_ShouldCorrectValue()
        {
            var simpleCalc = new SimpleCalc();
            var div = simpleCalc.Div(1,2);
            Assert.Equal(0, div);
        }
        [Fact]
         public void modDiv_ShouldCorrectValue()
        {
            var simpleCalc = new SimpleCalc();
            var modDiv = simpleCalc.modDiv(1,2);
            Assert.Equal(1, modDiv);
        }
    }
}

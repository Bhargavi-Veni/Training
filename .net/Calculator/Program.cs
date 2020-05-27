using System;
using Calculator.Lib;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the type of calculation");

            Console.WriteLine("Use the following to values to supply calculation type");

            var clacTypeName = Enum.GetNames(typeof(CalcTypes));

            foreach (var calcType in clacTypeName)
            {
                //   Console.WriteLine( CalcTypes[calcType]);
                Console.WriteLine($"{calcType} - {(int)Enum.Parse(typeof(CalcTypes), calcType)}");
            }

            var calcValue = Console.ReadLine();

            Console.Write("Enter first input:");
            var input1 = int.Parse(Console.ReadLine());
            Console.Write("Enter second input:");
            var input2 = int.Parse(Console.ReadLine());
            var calc = new SimpleCalc();

            var calcInt = int.Parse(calcValue);

            Console.Write("The result is ");
            switch (calcInt)
            {
                case (int)CalcTypes.Addition:
                    Console.WriteLine(calc.Sum(input1, input2));
                    break;
                case (int)CalcTypes.Subtraction:
                    Console.WriteLine(calc.Sub(input1, input2));
                    break;
                case (int)CalcTypes.Multiplication:
                    Console.WriteLine(calc.Mul(input1, input2));
                    break;
                case (int)CalcTypes.Division:
                    Console.WriteLine(calc.Div(input1, input2));
                    break;
                case (int)CalcTypes.ModularDivision:
                    Console.WriteLine(calc.modDiv(input1, input2));
                    break;
                default:
                    Console.WriteLine("not defined bcz the input entered is invalid(out of given options)");
                    break;
            }
        }
    }
}

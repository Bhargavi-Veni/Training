﻿using System;

namespace Calculator.Lib
{
    public class SimpleCalc
    {

        public int Sum(int a, int b)
        {
            return a+b;
        }
        public int Sub(int a, int b)
        {
            return a-b;
        }
        public int Mul(int a, int b)
        {
            return a*b;
        }
        public int Div(int a, int b)
        {
            return a/b;
        }
        public int modDiv(int a, int b)
        {
            return a%b;
        }
    }
}

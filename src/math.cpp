#include <iostream>
using namespace std;
int main()
{
    // int a = 2;
    // int b = 5;
    // ::cout << a * b;

    // int x = 10;
    // int y = x++; //y=100; x= 101;
    //::cout << y;

    // int x = 100;
    // int y = ++x;
    // ::cout << y; // y = 101; x=101

    // assigment
    const int x = 10;
    const double y = 5;
    double z = (x + 10) / (3 * y);

    ::cout << z;

    return 0;
}
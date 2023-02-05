#include <iostream>
using namespace std;

int main()
{
    const double x = 10;
    const int y = 5;
    double z = (x + 10) / (3 * y);
    cout << "x = " << x << endl
         << "y = " << y << endl
         << "z = " << z;
    return 0;
}
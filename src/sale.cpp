#include <iostream>
using namespace std;
int main()
{
    double sales = 95000;
    int state_tax_percentage = 4;
    int country_tax_percentage = 2;

    double state_tax_amount = (sales * state_tax_percentage) / 100;

    double country_tax_amount = (sales * country_tax_percentage) / 100;

    cout << "sale = " << sales << endl
         << "state tax amount = " << state_tax_amount << endl
         << "country tax amount = " << country_tax_amount;
}
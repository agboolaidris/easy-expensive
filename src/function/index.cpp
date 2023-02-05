#include <iostream>
using namespace std;

string welcome(string full_name)
{

    return "welome " + full_name;
};

int main()
{
    bool isValid = false;
    if (isValid)
    {
        cout << welcome("Idris");
    }
    else
    {
        cout << welcome("Wasiu");
    }
}
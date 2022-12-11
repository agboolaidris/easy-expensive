#include <iostream>
using namespace std;
int main()
{
    const int a = 1;
    int b = 2;
    int c = a;
    b = c;
    int file_size = 1000; // Snake case
    int FileSize = 1000;  // Pascal case
    int fileSize = 1000;  // Camel case
    ::cout << a;
    return 0;
}

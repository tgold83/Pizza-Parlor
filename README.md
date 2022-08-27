
# _Pizza Parlor_

#### By _Ted Gold_

#### _A simple JavaScript application that allows the user to find the cost of a pizza based on topping and size choices._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_

## Description

_This browser application allows users to create a custom pizza by inputing their toppings and pizza size of their choosing. The cost of the pizza will then be displayed on the bottom of the screen._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.HTML in your browser_
* _Choose your toppings and pizza size_
* _Click Submit_
* _Enjoy!_

## Known Bugs

* _No known bugs at the moment_

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium"}

Describe: Pizza.prototype.costSize

Test: "It should return "20" if size is "large".
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "large");
  myPizza.costSize();
Expected Output: 20

Test: "It should return "15" if size is "medium".
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza.costSize();
Expected Output: 15

Test: "It should return "10" if size is "small".
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "small");
  myPizza.costSize();
Expected Output: 10

Describe: Pizza.prototype.costTopping

Test: "It should add 2 for each item in the toppings array."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza.costTopping();
Expected Output: 4

Describe: Pizza.prototype.totalCost

Test: "It should add costSize and costTopping together."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myPizza.totalCost();
Expected Output: 19

## License

_MIT License

Copyright (c) [2022] [Ted Gold]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

Copyright (c) _2022_ _Ted Gold_
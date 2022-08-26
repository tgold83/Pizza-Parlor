Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium"}

Describe: Pizza.prototype.costSize

Test: "It should return "20" if size is "large".
Code: Pizza.size("large");
  Pizza.costSize();
Expected Output: 20

Test: "It should return "15" if size is "medium".
Code: Pizza.size("medium");
  Pizza.costSize();
Expected Output: 15

Test: "It should return "10" if size is "small".
Code: Pizza.size("small");
  Pizza.costSize();
Expected Output: 10

Describe: Pizza.prototype.costTopping

Test: "It should add 2 for each item in the toppings array."
Code: Pizza.toppings(["ham","pepperoni","pineapple"]);
  Pizza.costTopping();
Expected Output: 6

<!-- Describe: Pizza.prototype.totalCost

Test: "It should parseInt the costSize -->

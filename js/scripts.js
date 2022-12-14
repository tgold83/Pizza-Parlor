//Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costSize = function () {
  if (this.size === "large") {
    return 20;
  } else if (this.size === "medium") {
    return 15;
  } else if (this.size === "small") {
    return 10;
  }
}

Pizza.prototype.costTopping = function () {
  return this.toppings.length * 2
}

Pizza.prototype.totalCost = function (){
  return this.costSize() + this.costTopping();
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const toppingList = document.querySelectorAll("input[name='toppingItem']:checked");
  const pizzaSize = document.querySelector("input[name='pizzaSize']:checked").value;
  let newPizza = new Pizza(toppingList, pizzaSize);
  let cost = newPizza.totalCost();
  document.getElementById("cost").innerText = cost;
}

window.addEventListener("load", function (){
  document.querySelector("form#pizzaInput").addEventListener("submit", handleFormSubmission);
});


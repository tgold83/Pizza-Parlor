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
  let toppings = document.querySelector("input#toppingInput").value;
  const size = document.querySelector("input#pizzaSize");
  let myPizza = new Pizza(toppings, size);
  document.getElementById("submit").addEventListener("click", function() {
    myPizza.totalCost();
    document.querySelector("pizzaInput").value = myPizza.totalCost();
  });
}

window.addEventListener("load", function (){
  document.querySelector("form#pizzaInput").addEventListener("submit", handleFormSubmission);
});
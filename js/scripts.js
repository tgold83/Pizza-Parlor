//Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costSize = function () {
  if (this.size === "large") {
    return "20";
  } else if (this.size === "medium") {
    return "15";
  } else if (this.size === "small") {
    return "10";
  }
}
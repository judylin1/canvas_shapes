window.onload = function() {
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var shapeSelector = document.getElementById('shapeSelector');
var square = [];
var circle = [];

//add event listener based on shape selection, draw, push into array
canvas.addEventListener('click', function(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  var color;
  var newShape;
  if (shapeSelector.value === "Circle") {
    newShape = new Circle(x, y, color, 25, 0);
    newShape.drawCircle();
  }
  else if (shapeSelector.value === "Square") {
    newShape = new Square(x, y, color, 50);
    newShape.drawSquare();
    }
  newShape.pushArray();
});

//push into respective arrays
Shape.prototype.pushArray = function(x, y, color, radius, peri) {
  var obj = {};
  obj.x = this.x;
  obj.y = this.y;
  obj.color = this.color;
  obj.radius = this.radius;
  obj.peri = this.peri;
  obj.type = this.type;
  if (obj.type === "square") {
    square.push(obj);
  } else if (obj.type === "circle") {
    circle.push(obj);
  }
};

//general constructor
function Shape(x, y, color, radius, peri) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.radius = radius;
  this.peri = peri;
}

function Square(x, y, color, radius) {
  Shape.call(this, x, y, color, radius);
  this.type = "square";
  this.color = "#000099"
  this.peri = this.radius; //radius of cir is half of square
}
Square.prototype = new Shape();

Shape.prototype.drawSquare = function() {
  context.fillStyle = this.color;
  context.fillRect (this.x, this.y, this.radius, this.peri);
};

function Circle(x, y, color, radius, peri) {
  Shape.call(this, x, y, color, radius, peri);
  this.type = "circle";
  this.color = "#660000"
}
Circle.prototype = new Shape();

Shape.prototype.drawCircle = function() {
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(this.x, this.y, this.radius, this.peri, Math.PI*2, true);
  context.closePath();
  context.fill();
};

};

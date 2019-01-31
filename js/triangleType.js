let a = 0, b = 0, c = 0;

function checkTriangle() {
  getFormInput();
  //isValidTriangle();
  if (isValidTriangle()) {
    findTriangleType();
  };
};

function getFormInput() {
  a = parseInt(document.getElementById("sideA").value);
  b = parseInt(document.getElementById("sideB").value);
  c = parseInt(document.getElementById("sideC").value);
};

function isValidTriangle() {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid: 0 or negative values.");
    return false;
  };
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid: Side lenghts form a valid triangle.");
    return true;
  } else {
    console.log("Invalid: Side lengths does not form a valid triangle.");
    return false;
  };
};

function findTriangleType() {
  if (a == b && a == c) {
    console.log("Equilateral");
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles");
  }
  else {
    console.log("Scalene");
  }
};

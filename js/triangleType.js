let a = 0, b = 0, c = 0;
let textnode = document.createTextNode("");

// "Submits" form upon pressing the enter key in the input fields
document.addEventListener('keypress', function (event) {
  var key = event.which || event.keyCode;
    if (key === 13 && event.target.classList.contains('input')) {
      checkTriangle();
    }
}, false);

var resultPara = document.createElement("P");
document.getElementById("main").appendChild(resultPara);


function checkTriangle() {
  clearResultPara();
  getFormInput();
  if (isValidTriangle()) {
    findTriangleType();
  };
};

function getFormInput() {
  a = parseFloat(document.getElementById("sideA").value);
  b = parseFloat(document.getElementById("sideB").value);
  c = parseFloat(document.getElementById("sideC").value);
};

function isValidTriangle() {
  // If input values are 0 or negative
  if (a <= 0 || b <= 0 || c <= 0) {
    textnode.nodeValue = "Input is invalid, as one or more values are not positive numbers.";
    resultPara.appendChild(textnode);
    return false;
  };
  // If the two shorter sides combined are longer than the longest side, they can form a valid triangle
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    textnode.nodeValue = "Input is invalid, as the given lengths does not produce a valid triangle.";
    resultPara.appendChild(textnode);
    return false;
  };
};

function findTriangleType() {
  var result = "";
  if (a == b && a == c) {
    // All sides are of equal lengths
    result = "an Equilateral";
  } else if (a == b || a == c || b == c) {
    // Two sides are of equal lengths
    result = "an Isosceles";
  }
  else {
    // All sides are different lengths
    result = "a Scalene";
  };
  textnode.nodeValue = "The given lengths produce " + result + " triangle.";
  resultPara.appendChild(textnode);
};

function clearResultPara() {
  while (resultPara.firstChild) {
    resultPara.removeChild(resultPara.firstChild);
  };
};

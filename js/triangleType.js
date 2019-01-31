let a = 0, b = 0, c = 0;

function getFormInput() {
  a = parseInt(document.getElementById("sideA").value);
  b = parseInt(document.getElementById("sideB").value);
  c = parseInt(document.getElementById("sideC").value);

  console.log(a,b,c);
  isValidTriangle();
};

function isValidTriangle() {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid: 0 or negative values.");
    return false;
  };
  console.log(a+b, a+c, b+c);
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid: Side lenghts form a valid triangle.");
    return true;
  } else {
    console.log("Invalid: Side lengths does not form a valid triangle.");
    return false;
  };
};

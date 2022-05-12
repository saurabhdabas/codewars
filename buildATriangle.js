// Directions:

// For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

// buildTriangle(10);

// Returns:

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * * * 
// * * * * * * * 
// * * * * * * * * 
// * * * * * * * * * 
// * * * * * * * * * * 

// creates a line of * for a given length

function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
      line += "*";
  }
  return line + "\n";
}

function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  let triangle = "";

  //Let's start from the topmost line
  let lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(buildTriangle(10));
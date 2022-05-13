
// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

const organizeInstructors = function(instructors) {
  // Put your solution here
  let finalObj = {};
  for(let instructor of instructors) {
    if(!finalObj[instructor.course]) {
      finalObj[instructor.course] = [instructor.name];
    } else {
      finalObj[instructor.course].push(instructor.name)
    }
  }
  return finalObj;
};
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
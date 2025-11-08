
function calculateAverage() {
  let grade1;
  let grade2;
  let grade3;
    grade1 = parseFloat(document.getElementById("grade1").value);
    grade2 = parseFloat(document.getElementById("grade2").value);
    grade3 = parseFloat(document.getElementById("grade3").value);

  if (
    isNaN(grade1) || isNaN(grade2) || isNaN(grade3) ||
    grade1 < 0 || grade1 > 100 ||
    grade2 < 0 || grade2 > 100 ||
    grade3 < 0 || grade3 > 100
  ) {
    document.getElementById("output").innerHTML =
      'Please enter valid grades between 0 and 100';
    return;
  }

  let average
    average = (grade1 + grade2 + grade3) / 3;
  let letter
    letter = "";

  if (average >= 90) letter = "A";
  else if (average >= 80) letter = "B";
  else if (average >= 70) letter = "C";
  else if (average >= 60) letter = "D";
  else letter = "F";

  document.getElementById("output").innerHTML =
    `Average: ${average.toFixed(2)}<br>Letter Grade: ${letter}`;
}


let marks_12th_class = [91, 82, 63, 89, false, "Not Present"]
console.log(marks_12th_class[0])
console.log(marks_12th_class[1])
console.log(marks_12th_class[2])
console.log(marks_12th_class[3])
console.log(marks_12th_class[4])
console.log(marks_12th_class[5])
console.log(marks_12th_class[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is",marks_12th_class.length)
marks_12th_class[6] = 80 // Adding a new value to the array
marks_12th_class[0] = 96 // Changing the value of an array
console.log(marks_12th_class)
console.log(typeof marks_12th_class)
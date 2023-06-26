function calculateBmi(height, weight) {
    var height_in_meters = height / 100;  // Convert height from centimeters to meters
    var bmi = weight / (height_in_meters ** 2);  // Calculate BMI using the formula
  
    if (bmi < 18.5) {
      return "Your BMI is " + bmi.toFixed(2) + ". You are underweight.";
    } else if (bmi < 25) {
      return "Your BMI is " + bmi.toFixed(2) + ". You have a healthy weight.";
    } else if (bmi < 30) {
      return "Your BMI is " + bmi.toFixed(2) + ". You are overweight.";
    } else {
      return "Your BMI is " + bmi.toFixed(2) + ". You are obese.";
    }
  }
  

var height = 180;  // Height in centimeters
var weight = 74;  // Weight in kilograms

var result = calculateBmi(height, weight);
console.log(result);

module.exports = calculateBmi;
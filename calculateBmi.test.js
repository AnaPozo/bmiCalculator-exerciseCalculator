const { idText } = require('typescript');
const calculateBmi = require('./calculateBmi');




it('Should calculate BMI - Your BMI is 21.60. You have a healthy weight.', () => {
  expect(calculateBmi(180, 70)).toBe('Your BMI is 21.60. You have a healthy weight.');
});

it('Should calculate BMI - Underweight', () => {
  expect(calculateBmi(170, 55)).toBe('Your BMI is 19.03. You have a healthy weight.');
});

it('Should calculate BMI - Overweight', () => {
  expect(calculateBmi(160, 75)).toBe('Your BMI is 29.30. You are overweight.');
});

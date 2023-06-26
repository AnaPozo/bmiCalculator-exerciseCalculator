const calculateExercises = require('./exerciseCalculator');

it('Should calculate Exercises - Success', () => {
  const exerciseHours = [3, 2, 2, 4.5, 3, 1];
  const target = 2;
  
  expect(calculateExercises(exerciseHours, target)).toEqual({
    periodLength: 6,
    trainingDays: 6,
    success: true,
    rating: 3,
    ratingDescription: 'excellent job!',
    target: 2,
    average: 2.5833333333333335 // Ajusta el número decimal según tus necesidades
  });
});

it('Should calculate Exercises - Not met target', () => {
  const exerciseHours = [1, 0, 3, 0, 2, 1];
  const target = 2;
  
  expect(calculateExercises(exerciseHours, target)).toEqual({
    periodLength: 6,
    trainingDays: 4,
    success: false,
    rating: 1,
    ratingDescription: 'needs improvement',
    target: 2,
    average: 1.1666666666666667
  });
});

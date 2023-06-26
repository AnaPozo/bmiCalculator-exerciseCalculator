function calculateExercises(exerciseHours, target) {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(hours => hours > 0).length;
    const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
    const average = totalHours / periodLength;
    const success = average >= target;
  
    let rating;
    let ratingDescription;
  
    if (average < target * 0.75) {
      rating = 1;
      ratingDescription = "needs improvement";
    } else if (average < target * 1.25) {
      rating = 2;
      ratingDescription = "not too bad but could be better";
    } else {
      rating = 3;
      ratingDescription = "excellent job!";
    }
  
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    };
  }
  
  const exerciseHours = [3, 0, 2, 4.5, 0, 3, 1];
  const target = 2;
  
  const result = calculateExercises(exerciseHours, target);
  console.log(result);
  module.exports = calculateExercises;
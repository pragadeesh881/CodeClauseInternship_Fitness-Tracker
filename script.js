// Get form and summary elements
const form = document.getElementById('tracker-form');
const totalStepsEl = document.getElementById('total-steps');
const totalWorkoutEl = document.getElementById('total-workout');
const totalWaterEl = document.getElementById('total-water');
const totalCaloriesEl = document.getElementById('total-calories');

// Initialize totals
let totalSteps = 0;
let totalWorkout = 0;
let totalWater = 0;
let totalCalories = 0;

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input values
  const steps = parseFloat(document.getElementById('steps').value);
  const workout = parseFloat(document.getElementById('workout').value);
  const water = parseFloat(document.getElementById('water').value);

  // Calculate calories burned
  const stepsCalories = steps / 20; // 1 calorie per 20 steps
  const workoutCalories = workout * 5; // 5 calories per minute of workout
  const totalActivityCalories = stepsCalories + workoutCalories;

  // Update totals
  totalSteps += steps;
  totalWorkout += workout;
  totalWater += water;
  totalCalories += totalActivityCalories;

  // Update summary display
  totalStepsEl.textContent = totalSteps.toFixed(0);
  totalWorkoutEl.textContent = totalWorkout.toFixed(0);
  totalWaterEl.textContent = totalWater.toFixed(1);
  totalCaloriesEl.textContent = totalCalories.toFixed(0);

  // Clear the form
  form.reset();
});
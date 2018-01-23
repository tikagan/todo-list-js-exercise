// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  }
  return task
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

//prints out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
}

// original Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
//
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

const task1 = newTask("Clean Cat Litter", " Take all the poop out of the litter box")
const task2 = newTask("Do Laundry", "sadness")
const tasks = [task1, task2]

logTaskState(task1)
completeTask(task1)
logTaskState(task1)


console.log(tasks)

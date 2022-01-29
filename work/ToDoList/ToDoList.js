
/* Calc on Obj. 

function Calc(firstNumber, secondNummber, oper) {
  if (typeof firstNumber !== 'number' || typeof secondNummber !== 'number') return "Error";
  let operation = {
    sum: firstNumber + secondNummber,
    sub: firstNumber - secondNummber,
    mult: firstNumber * secondNummber,
    div: firstNumber / secondNummber,
  }
  if (oper in operation) {
    return operation[oper];
  } else return "Unknown operation";
}

console.log(Calc(1, 2, 'sum'));
console.log(Calc(1, 2, ''));*/


const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
}

function changeStatus(task,status) {
  list[task] = status;
};

function addTask(task) {
  list[task] = "To Do";
};

function deleteTask(task) {
  delete list[task];
};

function showList() {
  let taskToDo = '';
  let taskInProgress = '';
  let taskDone = ''
  for (let task in list) {
    switch (list[task]) {
      case "To Do" :
        taskToDo += ` ${task}\n`;
        break;
      case "In Progress" :
        taskInProgress += ` ${task}\n`;
        break;
      case "Done" :
        taskDone += ` ${task}\n`;
        break;
    }
  }
  return `Todo:\n${taskToDo || '-'} \nIn Progress :\n${taskInProgress || '-'} \nDone:\n${taskDone || '-'} `;
};
console.log(showList());
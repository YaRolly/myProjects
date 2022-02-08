const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
}

const PRIORITIES = {
    LOW: 'low',
    HIGH: 'high'
}

const LIST = [ 
    { name: 'create a post', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.LOW  },
    { name: 'test', status: STATUSES.DONE, priority: PRIORITIES.HIGH  } 
] 

function changeStatusPriority(name, newStatus, newPriority) {
    let findName = LIST.find(item => item.name == name);
    findName.status = newStatus;
    findName.priority = newPriority;
}

function addTask (newName, priority) {
    LIST.push({name: newName, status: STATUSES.TO_DO, priority: priority});
}

function deleteTask (name) {
    let findName = LIST.find(item => item.name == name);
    LIST.pop(findName);
}

function showBy(argument) {
    let result;
    if (argument === "status") {
        let toDo = '';
        let inProgress = '';
        let done = '';
        for (let key of LIST) {
            if (key.status === STATUSES.TO_DO) {
                toDo += `${key.name}\n`;
            }
            else if (key.status === STATUSES.IN_PROGRESS) {
                inProgress += `${key.name}\n`;
            }
            else if (key.status === STATUSES.DONE) {
                done += `${key.name}\n`;
            }
        }
        result = `To Do: ${toDo || '\n-'}\nIn Progress: ${inProgress || '\n-'}\nDone: ${done || '\n-'}`;
    }
    else if (argument === "priority") {
        let low = '';
        let high = '';
        for (let key of LIST) {
            if (key.priority === PRIORITIES.HIGH) {
                high += `${key.name}\n`;
            }
            else if (key.priority === PRIORITIES.LOW) {
                low += `${key.name}\n`;
            }
        }
        result = `High: ${high || '\n-'}\nLow: ${low || '\n-'}`;
    }
    return result;
}

console.log(showBy("status"));
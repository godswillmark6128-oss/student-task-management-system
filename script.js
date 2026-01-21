
let tasks = []

function addTask(){
    const Input = document.getElementById("taskInput").value;

    if (Input === ""){
        alert("Please enter a task");
        return;
    }

    let task = {
        taskId: tasks.length + 1,
        taskTitle: Input,
        taskStatus: "Pending"
    }

    tasks.push(task)
    displayTasks()
    Input = "";
}

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.taskTitle + " - " + task.taskStatus;
        taskList.appendChild(li)
    })
}
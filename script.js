let inputTask = document.getElementById("inputTask");
let btn = document.getElementById("btn");
let displayTask = document.getElementById("displayTask");
let btn2=document.getElementById("btn2")
let Tasks = [];

btn.onclick = function () {
    if (inputTask.value.length == 0) {
        alert("Enter the Taks Name ")
    }
    else {
        let taskName = inputTask.value;
        Tasks.push(taskName)
        inputTask.value = ""
        displayTasks()
        console.log(Tasks)
    }
}
function displayTasks() {
     displayTask.innerHTML="";
    for (let i = 0; i < Tasks.length; i++) {
        let taskDiv=document.createElement("div")
        taskDiv.classList.add("sentence");
        taskDiv.textContent = Tasks[i];
        displayTask.appendChild(taskDiv)
    }
}
btn2.addEventListener("click",createNew);


function createNew () {
    Tasks=[];
    displayTask.innerHTML=""
    removeEvent();
    btn2.addEventListener("click", createNew);
}
function removeEvent(){
     btn2.removeEventListener("click",createNew);
}

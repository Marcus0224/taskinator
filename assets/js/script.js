var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) { 

  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name]").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  // package up dta as object
  var taskDataOdj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  //send it as an argument to create taskEl
  createTaskEl(taskDataOdj);

  }; 

  var createTaskEl = function(taskDataOdj) {
    // create list item 
    listItemEl = document.createElement("li");
    listItemEl.className = 'task-name';

    //create div
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataOdj.name + "<h3><span class='task-type'>" + taskDataOdj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list ti list 
    tasksToDoEl.appendChild(listItemEl);
  }

formEl.addEventListener("submit", taskFormHandler);


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) { 

  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name]").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  // create div
  var taskInfoEl = document.createElement("div");
  // give it a class
  taskInfoEl.className = "task-info";
  //add HTML
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "<h3><span class='task-type'>" + taskTypeInput + "</span>";
  
  listItemEl.textContent = taskNameInput; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

formEl.addEventListener("submit", createTaskHandler);


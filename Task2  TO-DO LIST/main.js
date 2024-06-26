function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var date = new Date();
      var timestamp = date.toLocaleString();
      var listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <span>${timestamp}</span>
        <button onclick="completeTask(this)">Complete</button>
      `;
      document.getElementById("taskList").appendChild(listItem);
      taskInput.value = "";
    }
  }
  
  // Function to mark a task as complete
  function completeTask(button) {
    var listItem = button.parentElement;
    listItem.classList.toggle("completed");
    var completedTaskList = document.getElementById("completedTaskList");
    completedTaskList.appendChild(listItem);
    button.textContent = "Delete";
    button.onclick = function() {
      listItem.remove();
    };
  }
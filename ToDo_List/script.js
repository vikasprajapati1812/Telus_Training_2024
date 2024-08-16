const btnn=document.getElementById("btn")
    btnn.addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const inputTExt = taskInput.value.trim();

    
    function toggleCompleted(event) {
      const listItem = event.target.parentNode;
      listItem.classList.toggle("completed");
      
    }

    function deleteTask(event) {
      const listItem = event.target.parentNode;
      listItem.remove();
    }


  if (inputTExt !== "") {
    const taskList = document.getElementById("task");

    const listItem = document.createElement("li");
    listItem.className = "task_item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleCompleted);

    const Span = document.createElement("span");
    Span.className = "task-text";
    Span.textContent = inputTExt;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTask);

    listItem.appendChild(Span);
    listItem.appendChild(checkbox);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem); 

    taskInput.value = "";  //// to empty the input box
  }
  else {
    alert("Please write any task!!!!")
  }


}



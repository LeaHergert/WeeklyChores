function addTask(roomIndex) {
  // Get the room element
  const roomElement = document.querySelector(
    `.row:nth-child(${roomIndex + 2})`
  ); // +2 to account for 1-based indexing and the header row

  // Create a new task row
  const taskRow = document.createElement("div");
  taskRow.classList.add("row");

  // Create task cell
  const taskCell = document.createElement("div");
  taskCell.classList.add("cell", "task");
  const taskId = `task-${roomIndex}-${roomIndex}`;
  taskCell.id = taskId;
  taskCell.contentEditable = true;
  taskRow.appendChild(taskCell);

  // Create assignee cell
  const assigneeCell = document.createElement("div");
  assigneeCell.classList.add("cell", "assignee");
  const assigneeId = `assignee-${roomIndex}-${roomIndex}`;
  assigneeCell.innerHTML = createAssigneeDropdown(assigneeId);
  taskRow.appendChild(assigneeCell);

  // Create weekday cells
  for (let i = 0; i < 7; i++) {
    const weekdayCell = document.createElement("div");
    weekdayCell.classList.add("cell", "weekdays");
    const weekdayId = `weekday-${roomIndex}-${i}`;
    weekdayCell.id = weekdayId;
    weekdayCell.onclick = () => toggleTask(roomIndex, i);
    taskRow.appendChild(weekdayCell);
  }

  // Append the new task row to the room
  roomElement.parentNode.insertBefore(taskRow, roomElement.nextSibling);
}

function createAssigneeDropdown(id) {
  const dropdown = `<select id="${id}">
                        <option value="person1">Person 1</option>
                        <option value="person2">Person 2</option>
                        <!-- Add more options as needed -->
                    </select>`;
  return dropdown;
}

function toggleTask(roomIndex, taskIndex) {
  // Implement logic to toggle the completion status of the task
  const weekdayCell = document.getElementById(
    `weekday-${roomIndex}-${taskIndex}`
  );
  weekdayCell.classList.toggle("completed");
}

// Add more JavaScript functions as needed for editing tasks, assigning persons, etc.

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Kindly Enter Task Name!!!!");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task" id="iD_${
                document.querySelector("#newtask input").value
              }" onClick="cross(this.id)">
                <input type="checkbox" id="${
                  document.querySelector("#newtask input").value
                }">
                    
                </input>
                <label class="taskname" for="${
                  document.querySelector("#newtask input").value
                }">${document.querySelector("#newtask input").value}</label>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};


function cross(clickedId) {
    var El = document.getElementById(clickedId);
    El.classList.add("opaque");
};

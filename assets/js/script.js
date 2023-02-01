/*jshint esversion: 6 */

//Start counting for id number on list task.
let taskIdCount = 0;

/**
 * list/add/delete
 */

//List all undone tasks
function taskList(){

    //Load task array
    let tasks = storageList('tasks');

    if (tasks.length === 0){
        return false;
    }
    taskIdCount = tasks.length;

    document.getElementById("todo").innerHTML = "";

    //Create undone task list
    tasks.forEach(function callback(value, index) {

        if (value !== null){
            let newListItem = document.createElement("li");
            newListItem.setAttribute("id", 'todo_' + index);

            let taskCompleteCheckbox = document.createElement("input");
            taskCompleteCheckbox.setAttribute("type", "checkbox");

            taskCompleteCheckbox.addEventListener("click", function(){
                taskDone(index);
            })

            newListItem.appendChild(taskCompleteCheckbox);
            let text = document.createTextNode(value);
            newListItem.appendChild(text);

            let trashCan = document.createElement("i");

            trashCan.setAttribute("class", "fa-regular fa-trash-can trashButton");
            trashCan.addEventListener("click", function() {
                taskDelete(index);
            })
            newListItem.appendChild(trashCan);

           // newListItem.innerHTML = '<input type="checkbox" aria-label="checkbox" onClick="taskDone(' + index + ')"> ' + 
           // value + 
           // ' <a href="javascript:taskDelete(' + index + ')" id="trash" aria-label="Trashcan to delete task" ><i class="fa-regular fa-trash-can" onClick="taskDelete(' + index + ')"></i></a>';
            document.getElementById("todo").appendChild(newListItem);
        }
    });
    document.getElementById("newInput").focus();
}

//Add task to list
function taskAdd(){

    //Get task info and remove html markup
    let newTask = document.getElementById("newInput").value;
    newTask =newTask.replace(/(<([^>]+)>)/gi, "");

    //Prevent empty input
    if (newTask.trim() === ""){
        swal.fire("Input field is empty. Please write something!");
        return false;
    }

    //add task to storage
    storageUpdate('tasks', taskIdCount, newTask);

    taskList();

    //clears input field after adding to list
    document.getElementById("newInput").value = "";
  
}

//Remove from storage
function taskDelete(rowID){

    storageDelete('tasks', rowID);

    taskList();
}

//When checkbox is check, moves list items to completed list
function taskDone(rowID){

    //Get value from id row
    let value = document.getElementById('todo_' + rowID).innerText;
    
    //Add new row to done
    let newDone = document.createElement("li");

    //add Get row to new row
    newDone.innerHTML = '<input type="checkbox" checked disabled="disabled"> ' + value;
    document.getElementById("done").appendChild(newDone);

    //Remove from storage
    storageDelete('tasks', rowID);

    taskList();
}

//Storage
function storageList(storage){

    if (localStorage.getItem(storage) === null) {
        return [];
    }

    let data = JSON.parse(localStorage.getItem(storage));

    //If array is empty reset clear storage and start over
    if(data.join(',').replace(/,/g, '').length === 0) {
        localStorage.clear();
    }
    return data;
}

//Update storage
function storageUpdate(storage, id, value){

    let data = storageList(storage);
    data[id] = value;
    localStorage.setItem(storage,JSON.stringify(data));
}

//Delete from storage
function storageDelete(storage, id){

    let data = storageList(storage);

    //remove data.
    delete data[id];
    
    data.filter(n => n);
    data.filter(Number);
    data.filter(Boolean);

    localStorage.setItem(storage, JSON.stringify(data));
}

taskList();

//Listen for click createTaskButton to create list item.
document.getElementById("createTaskButton").addEventListener("click", () => {
    taskAdd();
});

//Listen for enter key up to create list item.
let newTask = document.getElementById("newInput");
newTask.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        taskAdd();
        document.getElementById("newInput").focus();
    }
});

//Listen for click clearTaskButton to remove done list item. 
document.getElementById("clearTaskButton").addEventListener("click", () => {
    document.getElementById("done").innerHTML = "";
});
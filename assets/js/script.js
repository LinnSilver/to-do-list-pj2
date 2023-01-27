//Start counting for id number on list task.
let taskIdCount = 0;

// list/add/delete

//Load task array
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
            newListItem.innerHTML = '<input type="checkbox" onClick="taskDone(' + index + ')"> ' + 
                                    value + 
                                    ' <a href="javascript:taskDelete(' + index + ')"><i class="fa-regular fa-cross" onClick="taskDelete(' + index + ')"></i></a>';
            document.getElementById("todo").appendChild(newListItem);              
        }
    });
    document.getElementById("newInput").focus();
}

//Add task to list. 
function taskAdd(){

    //Get task info and remove html markup
    let newTask = document.getElementById("newInput").value;
    newTask =newTask.replace(/(<([^>]+)>)/gi, "");

    //Prevent empty input.
    if (newTask.trim() === ""){
        swal.fire("Input field is empty. Please write something!")
        return false;
    }

    //add task to starage
    storageUpdate('tasks', taskIdCount, newTask);

    taskList();

    //clears input field after adding to list.
    document.getElementById("newInput").value = "";
  
};



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

    if (localStorage.getItem(storage) === null){
        return[];
    }

    let data = JSON.parse(localStorage.getItem(storage));

    if (data.join(',').replace(/,/g, '').length === 0) {
        localStorage.clear();
    }
    return data;
}

function starageUpdate(storage, id, value){

    let data = storageList(storage);
    data[id] = value;
    localStorage.setItem(storage,JSON.stringify(data));
}

function storageDelete(starage, id){

    let data = storageList(storage);

    //remove data
    delete data [id];
    
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
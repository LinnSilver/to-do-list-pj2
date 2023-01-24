//Start counting for id number on list task.
var todoNr = 0;

//Listen for click createTaskButton to create list ithem.
document.getElementById("createTaskButton").addEventListener("click", () => {
    createListIthem();
});

//Listen for enter key up to create list item.
let newTask = document.getElementById("newInput");
newTask.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        createListIthem();
    }
})

//Add task to list. 
function createListIthem(){

    //Add id number to list task
    todoNr++;
    let Input = "newInput";
    let newTask = document.getElementById(Input).value;

    //Prevent empty input.
    if (newTask.trim() === ""){
        alert("Input field is empty. Please write something!");
        return false;
    }

    let newListIthem = document.createElement("li");
    newListIthem.setAttribute("id", 'todo_' + todoNr);
    newListIthem.innerHTML = '<input type="checkbox" onClick="toDoDone(' + todoNr + ')"> ' + newTask; 
    console.log(newListIthem);
    document.getElementById("todo").appendChild(newListIthem);

    //clears inputfeald after adding to list.
    document.getElementById(Input).value = "";
}

//When checkbok is check moves listithems to compleated list
function toDoDone(rowID){

    console.log('ToDo done #'+rowID);

    //Get value from id row
    let value = document.getElementById('todo_' + rowID).innerText;
    
    //Add new row to done
    let newDone = document.createElement("li");

    //add Get row to new row
    newDone.innerHTML = '<input type="checkbox" checked disabled="disabled"> ' + value;
    document.getElementById("done").appendChild(newDone);

    //Remove from row
    document.getElementById('todo_' + rowID).remove();
}
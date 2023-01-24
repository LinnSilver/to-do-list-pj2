
//Listen for click createTaskButton to create list ithem
document.getElementById("createTaskButton").addEventListener("click", () => {
    createListIthem();
});

//Listen for enter key up to create list item
let newTask = document.getElementById("newInput");
newTask.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        createListIthem();
    }
})
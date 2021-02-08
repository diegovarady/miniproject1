//Create elements variables
const myText = document.getElementById("my-text"),
      add = document.getElementById("add"),
      cancel = document.getElementById("cancel"),
      myList = document.getElementById("list");
      
// Function to create "li" and "button" for each activity / 
let createVal = () => {
    let crList = document.createElement("li");    
    let delBtn = document.createElement("button");    
    let crContent = document.createTextNode(myText.value);
    let delBtnCont = document.createTextNode("remove")
    crList.id = "toDo";    
    delBtn.id = "toDoRemove";
    crList.className = "toDo";
    delBtn.className = "toDoRemove";    
    crList.appendChild(crContent);
    delBtn.appendChild(delBtnCont);
    crList.appendChild(delBtn);
    myList.appendChild(crList);
    myText.value = "";
}

add.addEventListener("click", createVal);
cancel.addEventListener("click", () => myText.value = "");

//JS event propagation. Erase activity when click in remove button
myList.addEventListener("click", e => {
    if (e.target.id === "toDoRemove") {
        e.target.parentElement.remove()
    }    
})

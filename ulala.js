const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector('h5');
const list = document.querySelector('ul.collection');
let storedTasks = [];
window.addEventListener("load", reload);

function eraser(e){
    if (e.target.className == toBeRemovedButtonClass){
        console.log(e.target.parentElement.parentElement.innerText);
        let index = storedTasks.indexOf(e.target.parentElement.parentElement.innerText);

    }
}

function reload(e) {
    console.log("reloaded!");
    let b = localStorage.getItem("taskList");
    b = JSON.parse(b);
    b.forEach(element =>{
        console.log(element);
        let li = document.createElement("li");
        li.setAttribute("class", "collection-item");
        li.innerHTML = `${element}<a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`
        list.appendChild(li);
        storedTasks.push(element)
    });
}

form.addEventListener('submit', runEvent);

///ADD///

function runEvent(e) {
    if(taskInput.value ===""){
        alert("No task!!");
    }else{
        const li = document.createElement('li');
        li.setAttribute("class", "collection-item");li.innerHTML = `${taskInput.value}<a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`
        list.appendChild(li);
        console.log(e.type);   e.preventDefault();
        storedTasks.push(taskInput.value);
        stringObject = JSON.stringify(storedTasks);
        localStorage.setItem('taskList',stringObject); 
         }
};

///ELIMINAR///

const bodyNode = document.body;bodyNode.addEventListener("click",eventHandler)
function eventHandler(e){
   if(e.target.className === "fa fa-times"){
       e.target.parentElement.parentElement.remove();
       let index = storedTasks.indexOf(e.target.parentElement.parentElement.innerText);
        console.log(index)
        storedTasks.splice(index, 1);
        let stringyObject = JSON.stringify(storedTasks);
        localStorage.setItem("taskList", stringyObject);
        e.preventDefault()
   }
};

//--------le decimos que hacer con el boton--------//
const target = document.querySelector(".clear-tasks");
target.addEventListener("click", eventHandler_clear);
function eventHandler_clear(e) {
 e.preventDefault();
 let lis = document.querySelectorAll("li");
 lis.forEach(function(element) {
   element.remove();
 });
}

///SAVE///
let taskListLocal=[];

///Filter///
let filterTasks = document.getElementById("search-words");
filterTasks.addEventListener("keyup", myFunction);

function myFunction() {

    // Declare variables
    console.log('probando');
    
    let input = document.getElementById("search-words");
    let filter = input.value;
    console.log(filter)
  
    // 
    let elements = document.getElementsByClassName("collection-item");
    console.log(elements);
    elements=[].slice.call(elements)
    console.log(elements)
    elements.forEach(element => {
if(element.innerText.indexOf(filter) > -1){
    console.log(element.innerText.indexOf(filter) > -1)
    element.style.display = "";
}
else {
    element.style.display = "none";
                                  }
                                })
                     }
 
    
   

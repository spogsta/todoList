let todoList = [];
let projectList = [];
let currentProject = 0;
projectList=[todoList];
let table=document.getElementById("table");



class Todo {
    constructor(title, date, time, description, complete){
        this.title = title;
        this.date = date;
        this.time = time;
        this.description = description;
        this.complete = complete; // true/false, check box.
    }
};

function adTodo(x){
    projectList[currentProject].push(x);
    displayTodoList();
}

function newTodo(title, date, time, description, complete){
    let tempTodo = new Todo(title, date, time, description, complete)
    adTodo(tempTodo);
    displayTodoList();
}

newTodo("Take the hobbits to isengard", "12/12/1212", "12:00", "we're taking the hobbits to isengard", true);
newTodo("play that funky music", "12/12/1212", "12:00", "play that funky music whiiiteee", true);

console.log(projectList[currentProject]);







function displayTodoList(){
    table.innerHTML="";
    for (i=0; i<projectList[currentProject].length; i++){
        let tr = document.createElement("tr");
        let tdTitle = document.createElement('td');
        let tdDate = document.createElement('td');
        let tdTime = document.createElement('td');
        let tdDescription = document.createElement('td');
        let tdComplete = document.createElement('td');
        let tdDelete = document.createElement('td');

        tr.id = "tableRow" + i;
        tdTitle.appendChild(document.createTextNode(projectList[currentProject][i].title));
        tdDate.appendChild(document.createTextNode(projectList[currentProject][i].date));
        tdTime.appendChild(document.createTextNode(projectList[currentProject][i].time));
        tdDescription.appendChild(document.createTextNode(projectList[currentProject][i].description));
        tdComplete.appendChild(document.createTextNode(projectList[currentProject][i].complete));

       let tableIndex = i;
       
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "clear table row";
        btn.addEventListener("click", function () {
            projectList[currentProject].splice(tableIndex, 1);
            displayTodoList();

           
        })
        tdDelete.appendChild(btn);


        tr.appendChild(tdTitle);
        tr.appendChild(tdDate);
        tr.appendChild(tdDate);
        tr.appendChild(tdTime);
        tr.appendChild(tdDescription);
        tr.appendChild(tdComplete);
        tr.appendChild(tdDelete);
        table.appendChild(tr);
    }

}

function formSubmit(){
    let titleForm = document.getElementById("title").value;
    let dateForm=document.getElementById("date").value;
    let timeForm = document.getElementById("time").value;
    let descriptionForm = document.getElementById("description").value;
    let completeForm = document.getElementById("complete");
    let completeOrNot = false;
    if (completeForm.checked == true){
        completeOrNot = true;
    } else {};

    newTodo(titleForm, dateForm, timeForm, descriptionForm, completeOrNot);
    modal.style.display = "none";


}
 
function newProject(){
    let a = [];
    projectList.push(a);
    document.getElementById("selectProject").max=projectList.length-1;
}

function selectProject(){
    let a = document.getElementById("selectProject").value;
    currentProject=a;
    displayTodoList();
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
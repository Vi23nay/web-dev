var uid = new ShortUniqueId();//for generating unique ids
// console.log(uid());
//variables
let allColors = ['pink', 'blue', 'green', 'black'];
// let gcColor = "black";//global color
let defaultColor = "black";
let cFilter = "";//concept for showing all tasks after filterartion //if double click on same color 
let deleteMode = false;
// let defaultInitialColor = 'black';
//elements
// let input = document.querySelector(".task_input");/
let mainContainer = document.querySelector(".main-container"); 
let colorBtns = document.querySelectorAll(".color");
let colorGroupContainer = document.querySelector(".color-group_container");
let plusContainer = document.querySelector(".plus_container");
let crossContainer = document.querySelector(".multiply_container");
let lockContainer = document.querySelector(".lock_container");
let unlockContainer = document.querySelector(".unlock_container");





//event listeners

// input.addEventListener("keydown",function(e){
//     // console.log(e);
//     if(e.key == 'Enter' && input.value){
//         // console.log("task-value", input.value);
//         let id = uid();
//         // createTask(id, input.value, defaultColor ,true);// not mandatory step-> it's my wish to pass all arguments or not
//         createTask(id, input.value, true);
//         input.value = "";//to clear
//     }
    
// })

//------------------------------------------FILTERING---------------------------------------------------//


// //filtering -> my way
// for(let i = 0; i < colorBtns.length ; i++){
//     colorBtns[i].addEventListener("click", function() {
//         let clickedColorBtn = colorBtns[i].classList[1]
//         filterCards(clickedColorBtn);
        
//     })
// }

//filtering by bubbling concept

colorGroupContainer.addEventListener("click", function(e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if(e.target != colorGroupContainer){
        let clickedColor = e.target.classList[1];
        filterCards(clickedColor);

}
})


//-------------------------------------------REMOVE-------------------------------------------------//
crossContainer.addEventListener("click", function() {
    // console.log(crossContainer.classList.contains('active'));
    // if(crossContainer.classList.contains('active') == true){
    //     crossContainer.classList.remove('active');
    //     let allTasks = document.querySelectorAll(".task_container");
    //     for(let i = 0; i < allTasks.length; i++){
    //             allTasks[i].removeEventListener("click", function(e) {
    //                 console.log("remove");
    //                 })
    //     }  

    // }else{
    //     crossContainer.classList.add('active');
    //     let allTasks = document.querySelectorAll(".task_container");
    //     for(let i = 0; i < allTasks.length; i++){
    //             allTasks[i].addEventListener("click", function(e) {
    //                     console.log(e);
    //                     allTasks[i].remove();
    //                 })
    //     }                    
    // }
    
    deleteMode =! deleteMode;
    if(deleteMode){
        crossContainer.classList.add('active'); 
    }else{
        crossContainer.classList.remove('active');
    }
    plusContainer.classList.remove('active');              
})


//----------------------------------lock-unlock---------------------------------//
lockContainer.addEventListener("click", function(e) {
    lockContainer.classList.add('active');
    unlockContainer.classList.remove("active");
    let allTasks = document.querySelectorAll(".task_main-container");
    console.log('hello');
    for(let i = 0 ; i < allTasks.length; i++){
        allTasks[i].children[1].setAttribute("contenteditable", "false");
        // allTasks[i].children[1].contentEditable = false; //also work
    }
})
unlockContainer.addEventListener("click", function(e) {
    unlockContainer.classList.add("active");
    lockContainer.classList.remove("active");
    let allTasks = document.querySelectorAll(".task_main-container");
    console.log('hello');
    for(let i = 0 ; i < allTasks.length; i++){
        allTasks[i].children[1].setAttribute("contenteditable", "true");
    }
})

//related/helper functions
function createTask(id, task, flag, headerColor)  {
    // let colorOfheader;
    // if(flag == true){
    //     colorOfheader = 'black';
    // }else{
    //     colorOfheader =headerColor;
    // }
    //add to local storage
    // <div class = task-container></div> -> we have to first create this and set it's class 
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task_container");
    taskContainer.innerHTML = `<div class="task_header
    ${headerColor?headerColor:defaultColor}"></div>
    <div class="task_main-container">
    <h3 class="task_id">#${id}</h3>
    <div class='text' contenteditable = 'true'>${task}</div>
    </div>`
    mainContainer.appendChild(taskContainer);
    
    //add_event_listener for color challengers
    //---------------------------color change--------------------------///
    let taskHeader = taskContainer.querySelector(".task_header");
    let inputTask = taskContainer.querySelector(".task_main-container>div");
    taskHeader.addEventListener("click",function() {
        //we use classes for color change in taskHeader
        // classList -> get all classes on the element
        let cColor = taskHeader.classList[1];
        // console.log(cColor);

        let cIdx = allColors.indexOf(cColor);
        let nextIdx = (cIdx + 1) % 4;
        let nextColor = allColors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor); 
        //id -> local storage search -> tell -> color update

        //removing from local storage too
        let idWalaelem = taskHeader.parentNode.children[1].children[0];//task_header -> task_container -> taskMaincontainer -> task_id;
        let id = idWalaelem.textContent;
        id = id.slice(1);// to remove #
        // console.log(id);
        let taskString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(taskString); // JSON string -> javaScript object
        
        for(let i = 0; i < tasksArr.length; i++) {
            if(tasksArr[i].id == id){
                tasksArr[i].color = nextColor;
                headerColor = nextColor;
                // console.log(defaultColor);
                break;
            } 
        }

        localStorage.setItem("tasks", JSON.stringify(tasksArr));
        
        
    })
    //**************************delete**************************//
    taskContainer.addEventListener("click",function() {
        if(deleteMode == true){
            taskContainer.remove();
            let idOfRemovedTask = taskContainer.querySelector(".task_id").textContent.slice(1);
            // console.log(idOfRemovedTask);
            // for()
            // localStorage -> remove
            let taskString = localStorage.getItem("tasks");
            let tasksArr = JSON.parse(taskString); // JSON string -> javaScript object
        
            for(let i = 0; i < tasksArr.length; i++) {
                if(tasksArr[i].id == idOfRemovedTask){
                    if(i == 0){
                        tasksArr.shift();
                    }else{
                        tasksArr.splice(i,i);//delete
                    }
                    break;
                } 
            }
            localStorage.setItem("tasks", JSON.stringify(tasksArr));
        }
    })

    ////////////////////local storage-> add
    if(flag == true){
        //old tasks
        let taskString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(taskString) || []; // JSON string -> javaScript object
        taskObject = {
            id : id,
            task : task,
            color : headerColor
        }
    //1 new task
        tasksArr.push(taskObject);
        //set
        localStorage.setItem("tasks", JSON.stringify(tasksArr)); // javaScript object -> JSON string
    }


    //edit -> update in local storage too
    // let taskHeader = taskContainer.querySelector(".task_header");
    inputTask.addEventListener("blur", function(e) {//change is not working but blur -> work
        //blur calls on focus
        // console.log("value of main task", mainTask.innerText);
        let taskString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(taskString); // JSON string -> javaScript object
        
        for(let i = 0; i < tasksArr.length; i++) {
            if(tasksArr[i].id == id){//closure -> id
                tasksArr[i].task = inputTask.innerText;
            } 
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));

    })
}

//*************************** modal working***************************//
plusContainer.addEventListener("click", function() {
    plusContainer.classList.add('active');
    crossContainer.classList.remove('active');
    let div = document.createElement("div");
    div.setAttribute("class", "modal_container shadow");
    div.innerHTML = `<div class="modal-text_box" contenteditable = "true" >Enter your task here</div>
    <div class="modal-color_box">
        <div class="color_picker pink"></div>
        <div class="color_picker blue"></div>
        <div class="color_picker green"></div>
        <div class="color_picker black"></div>`
    mainContainer.appendChild(div);

    //color choosing from modal
    let colorChooser = document.querySelectorAll(".color_picker");
    for(let i = 0; i < colorChooser.length; i++){
        colorChooser[i].addEventListener("click", function() {
            // console.log(colorChooser[i].classList[1]);
            defaultColor = colorChooser[i].classList[1];
            
            for(let j = 0; j < colorChooser.length; j++){
                if(colorChooser[j].classList[1] == defaultColor){
                    colorChooser[j].classList.add("selected");
                    // colorChooser[j].style.border = "0.2rem solid white";
                }else{
                    colorChooser[j].classList.remove("selected");
                    // colorChooser[j].style.border = "0px";
                }
            }
            
        })
    }
    //entering input and creating tasks
    let modalContainer = document.querySelector(".modal_container");
    // let modalInputTextBox = document.querySelector(".modal-text_box");
        modalContainer.addEventListener("keydown", function(e) {
        // console.log(modalInputTextBox.innerText);
        let modalInputTextBox = modalContainer.children[0];
        if(e.key == "Enter" && modalInputTextBox.innerText.trim() !== "Enter your task here" ){
            let id = uid();
            createTask(id, modalInputTextBox.innerText, true, defaultColor);
            //hiding of modal
            mainContainer.removeChild(div);
            plusContainer.classList.remove('active');

        }
    })    
})
    
////**********************************filtering*************************************////
function filterCards(filteredColor){
    let allTasks = document.querySelectorAll(".task_header");
    if(cFilter != filteredColor){
        for(let j = 0; j < allTasks.length; j++){
            let headerColor = allTasks[j].classList[1];
            if(headerColor == filteredColor){
                //show
                allTasks[j].parentNode.style.display = "block";
            }else{
                //hide
                allTasks[j].parentNode.style.display = "none";
                
            }
            
        }

        cFilter = filteredColor;
        
    }else{
        cFilter = "";
        for(let j = 0; j < allTasks.length; j++){
            allTasks[j].parentNode.style.display = "block";
        }
    }
}

//calling
//check if any of the tasks are in local localStorage -> then bring it to ui
(function () {
    //create
    //get all the elements in the tasks key -> loop
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    for(let i = 0; i < tasks.length; i++){
        let { id,task,color } = tasks[i]; 
        createTask(id, task, false, color);
    }
})();

// localStorage.setItem("hello", "hello bro");
// localStorage.setItem("hello1", "hello bro");
// localStorage.setItem("hello2", "hello bro");
// localStorage.setItem("hello3", "hello bro");
// localStorage.setItem("hello4", "hello bro");
// localStorage.setItem("hello5", "hello bro");
// console.log(localStorage.length);

// localStorage.removeItem("hello3");
// localStorage.clear();//only remove using clear and remove -> not by commenting
// localStorage.setItem("hello", "hello bro");
// localStorage.setItem("hello1", "hello bro");
// localStorage.setItem("hello2", "hello bro");
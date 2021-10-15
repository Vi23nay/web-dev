var uid = new ShortUniqueId();//for generating unique ids
// console.log(uid());
let input = document.querySelector(".task_input");
let mainContainer = document.querySelector(".main-container"); 
let allColors = ['pink', 'blue', 'green', 'black'];
let defaultColor = "black";
let colorBtns = document.querySelectorAll(".color");
let cFilter = "";//concept for showing all tasks after filterartion //if double click on same color 


input.addEventListener("keydown",function(e){
    // console.log(e);
    if(e.key == 'Enter' && input.value){
        // console.log("task-value", input.value);
        let id = uid();
        createTask(id, input.value);
        input.value = "";//to clear
    }

})

function createTask(id, task) {
    // <div class = task-container></div> -> we have to first create this and set it's class 
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task_container");
    taskContainer.innerHTML = `<div class="task_header
    ${defaultColor}"></div>
    <div class="task_main-container">
    <h3 class="task_id">#${id}</h3>
    <div class="text">${task}</div>
    </div>`
    mainContainer.appendChild(taskContainer);
    
    //add_event_listener for color challengers
    let taskHeader = taskContainer.querySelector(".task_header");
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
        
        
        
    })
}

// //filtering -> my way
// for(let i = 0; i < colorBtns.length ; i++){
//     colorBtns[i].addEventListener("click", function() {
//         let clickedColorBtn = colorBtns[i].classList[1]
//         filterCards(clickedColorBtn);
        
//     })
// }

//filtering by bubbling concept
let colorGroupContainer = document.querySelector(".color-group_container");
colorGroupContainer.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    if(e.target != colorGroupContainer){
        let clickedColor = e.target.classList[1];
        filterCards(clickedColor);

    }
function filterCards(filteredColor){
    let allTasks = document.querySelectorAll(".task_header");
    if(cFilter != filteredColor){
        cFilter = filteredColor;
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
        
    }else{
        cFilter = "";
        for(let j = 0; j < allTasks.length; j++){
            allTasks[j].parentNode.style.display = "block";
        }
    }
}

})


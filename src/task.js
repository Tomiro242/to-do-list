import { listContainer } from "./array";
import { totalStorage } from "./storage";

let ollo = 0;

export function createTask (alpha,bravo,charlie,firstarr,secondarr){
    let pending = document.querySelector ('#pending');
    let taskDiv = document.createElement ('div');
    let taskInfo = document.createElement ('h5');
    let taskDescript = document.createElement ('p');
    let compBtn = document.createElement ('button');
    let delBtn = document.createElement ('button');

    taskInfo.textContent = alpha;
    taskDescript.textContent = bravo;
    compBtn.textContent = "comlete";
    delBtn.textContent = "X";

    compBtn.style.cssText = "color:white ; background:blue ;";
    delBtn.style.cssText = "background:red;position: absolute; top:0; right:0";
    taskDiv.style.cssText = "position:relative;";
    compBtn.addEventListener('click', ()=>{finTask(firstarr,secondarr); totalStorage.myStorage("storComplete",listContainer.completeList); totalStorage.myStorage("storPending",listContainer.pendingList)});

    taskDiv.dataset.idCount = charlie;

    taskDiv.appendChild (taskInfo);
    taskDiv.appendChild (taskDescript);
    taskDiv.appendChild (compBtn);
    taskDiv.appendChild (delBtn);
    pending.appendChild (taskDiv);

    delBtn.addEventListener('click',deleteTask);

    function deleteTask (){
        const findDel = (element) => element.count == taskDiv.dataset.idCount;
        let keel = listContainer.pendingList.findIndex(findDel);
        listContainer.pendingList.splice(keel,1);
        taskDiv.remove();
    }

       
    
    
    function finTask (pendarra,comparra){
        let setTask = 0;
        const findMe = (element) => element.count == taskDiv.dataset.idCount;//compare the div idcount attribut with object property key//
        let keeper = pendarra.findIndex(findMe);//find the index in the pending array//
        comparra.push(pendarra[keeper]);//make a copy of object into to completed array//
        pendarra.splice(keeper,1);//remove object from pending array//
        console.log (comparra);
        taskDiv.remove();
        console.log(keeper);
        completeTask ();

        /*function createPen () {
             completeTask ('hello', 'world');
             setTask++;
        };*/
         
       // createPen();
        
    
    }
};

export function completeTask (){
    let completed = document.querySelector ('#completed');
    let compTaskDiv = document.createElement ('div');
    let compTaskInfo = document.createElement ('h5');
    let compTaskDescript = document.createElement ('p');
    let compDel = document.createElement ('button');

    compTaskInfo.textContent = listContainer.completeList[ollo].task;
    compTaskDescript.textContent = listContainer.completeList[ollo].description;
    compTaskDiv.dataset.idCount = listContainer.completeList[ollo].count;
    compDel.textContent = "X";





    compDel.style.cssText = "background:red; position:absolute; top:0; right:0;";
    compTaskDiv.style.cssText = "position:relative;";

    compTaskDiv.appendChild (compTaskInfo);
    compTaskDiv.appendChild (compTaskDescript);
    compTaskDiv.appendChild (compDel);
    completed.appendChild (compTaskDiv);

    compDel.addEventListener('click',deletecompTask);

    function deletecompTask (){
        const findDel = (element) => element.count == compTaskDiv.dataset.idCount;
        let keel = listContainer.completeList.findIndex(findDel);
        listContainer.completeList.splice(keel,1);
        compTaskDiv.remove();
    }

    ollo++
    
};

/*function finTask (pendarra,comparra){
    
    const findMe = (element)=> element.idCount === taskDiv.dataset.idCount;
    let keeper = pendarra.findIndex(findMe);
    comparra.push(pendarra[keeper]);
    comparra.splice(keeper,1);
    console.log (comparra);
    

}*/
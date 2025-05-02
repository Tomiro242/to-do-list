import {createTask} from "./task.js";
import {listContainer} from "./array.js";
import {toDoItem} from "./object.js";
import { totalStorage } from "./storage.js";





export const form = (function (){
            
            let totalCount = 0;
            
            function createForm (){
                let body = document.querySelector ('body');
                let formy = document.createElement ('form');
                let divTask = document.createElement ('div');
                let divDiscript = document.createElement ('div');
                let labTask = document.createElement ('label');
                let labDiscript = document.createElement ('label');
                let inTask = document.createElement ('input');
                let discriptText = document.createElement ('textarea');
                let subBtn = document.createElement ('button');
                
               /* formy.setAttribute ("method", "post");*/
                inTask.setAttribute("type", "text");

                labTask.textContent = "Task";
                labDiscript.textContent = "info";
                subBtn.textContent = "sub";


                divTask.appendChild (labTask);
                divTask.appendChild (inTask);
                divDiscript.appendChild (labDiscript);
                divDiscript.appendChild (discriptText);
                formy.appendChild (divTask);
                formy.appendChild (divDiscript);
                formy.appendChild (subBtn);
                body.appendChild (formy);

                subBtn.addEventListener('click', ()=>{submit;listContainer.pendingList.push(new toDoItem(inTask.value,discriptText.value,totalCount));createTask(listContainer.pendingList[totalCount].task,listContainer.pendingList[totalCount].description,listContainer.pendingList[totalCount].count,listContainer.pendingList,listContainer.completeList);formy.remove();totalCount++;console.log(listContainer.pendingList);totalStorage.myStorage("storPending",listContainer.pendingList);});
                
            };

            let formbtn = document.querySelector ('#formbtn');

            function submit (event){
                event.preventDefault();
                
            };

            

            return {createForm, formbtn, submit };
})();
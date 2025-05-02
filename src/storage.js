import { createTask,completeTask } from "./task";
import { listContainer } from "./array";
import { form} from "./form";

export const totalStorage = (function(){

    function myStorage (sting,a){

        localStorage.setItem(sting,JSON.stringify(a));
        console.log(JSON.parse(localStorage.getItem(sting)));
    };

    function checkStorage (b,c){
        let storSize = localStorage.length;
       // let firstStorage = JSON.parse(localStorage.getItem("storPending"));
       // let firstSize = firstStorage.length;
       // let arrayState = a.length;
        //let newIndex = 0;
        


       if (storSize === 0){
            console.log(storSize);
        }else if (storSize == 1 ){
          let firstStorage = JSON.parse(localStorage.getItem("storPending"));
          let firstSize = firstStorage.length;
          let newIndex = 0;

          for (let i = 0; i < firstSize; i++){
              b.push(firstStorage[newIndex]);
              createTask(firstStorage[newIndex].task,firstStorage[newIndex].description,newIndex,listContainer.pendingList,listContainer.completeList);
              newIndex++;
          };
          
         
        }else if (storSize == 2){
          let firstStorage = JSON.parse(localStorage.getItem("storPending"));
          let secondStorage = JSON.parse(localStorage.getItem("storComplete"));
          let firstSize = firstStorage.length;
          let secondSize= secondStorage.length;
          let allSize = firstSize + secondSize;
          let newIndex = 0;
          let secIndex = 0;

          for (let i = 0; i < firstSize; i++){
              b.push(firstStorage[newIndex]);
              createTask(firstStorage[newIndex].task,firstStorage[newIndex].description,newIndex,listContainer.pendingList,listContainer.completeList);
              newIndex++;
          };

          for (let i = 0; i < secondSize; i++){
             c.push(secondStorage[secIndex]);
             completeTask(secondStorage[secIndex].task,secondStorage[secIndex].description);
             secIndex++;
             
          };
          

    }
}

    return {myStorage,checkStorage}
          
})();
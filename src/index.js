import "./styles.css";
import {form} from "./form.js";
import {toDoItem} from "./object.js";
import { listContainer } from "./array.js";
import { totalStorage } from "./storage.js";
import {addDays} from "date-fns";// a third party library downloade for lesson//

//totalStorage.myStorage("pendingList",listContainer.pendingList);//

const tor = addDays(new Date (),0);

console.log(tor);

const clearstor = document.querySelector ('#clearstor');

clearstor.addEventListener ("click",()=>{ localStorage.clear()});

totalStorage.checkStorage(listContainer.pendingList,listContainer.completeList);

//window.addEventListener('beforeunload',()=>{totalStorage.myStorage("storPending",listContainer.pendingList);totalStorage.myStorage("storComplete",listContainer.completeList)});used to create storage before page reload however in form submit button and task complete button:look at//







form.formbtn.addEventListener('click',form.createForm);





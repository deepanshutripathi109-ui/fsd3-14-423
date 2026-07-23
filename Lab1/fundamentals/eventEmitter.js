import{log} from "node:console";
import {EventEmitter} from "node:events";
const task = new EventEmitter();
const sayHi = (name) =>{
    console.log(`Loggedin ${name}`);
}; 
// task.on("greet",()=>{
//     console.log("Logged Out");
// });
task.on("greet",sayHi);
task.once("greet",()=>{
    console.log("system started...");
});



task.on("exit",sayHi);


task.once("exit",(name)=>{
    console.log(`system is shut down by ${name}`);
})



task.on("greet",sayHi);
task.emit('greet','Deepanshu Tripathi')
task.off("greet",sayHi);
task.emit("greet","Sonia singh");
// task.emit("greet","Rahul Singh");
task.emit("exit","Manager");


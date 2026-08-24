const f1=()=>{
    console.log("f1 start");
    f2();
    console.log("f1 running");
    console.log("f1 end");
}
const f2=()=>{
    console.log("f2 start");
    f3();
    console.log("f2 running");
    console.log("f2 end");
}
const f3=()=>{
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 end");
}

function main(){
    console.log("main starts");
    f1();

    console.log("main ends");
}
main();     //Synchronous call

// in asynchronous we use event loop to manage call stack

/*asynchronous calls  using timers : */
//  1)set timeout
//  2)set immediate
//  3)process.nextTick
// 4)set Interval   
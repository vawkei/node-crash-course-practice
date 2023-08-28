const hello = "hello";
console.log(hello);
// Terminal :hello

const greet =(name)=>{
    console.log(`Hello ${name}`)
};
greet("voke");
//Terminal: Hello voke

const speak =(time,name)=>{
    console.log(`${time} ${name}`)
};

speak("Good Evening","Voke");
//Terminal:Good Evening Voke


const scores =[10,20,30,40,50]
const greaterThan = scores.filter((x)=>x >30)
console.log(greaterThan);
// Terminal: [ 40, 50 ]

console.log(global)
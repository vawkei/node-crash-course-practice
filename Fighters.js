const fighters = [
    {id:"f1",name:"noob saibot"},
    {id:"f2",name:"sindel"},
    {id:"f3",name:"jade"},
    {id:"f4",name:"subzero"}
];
console.log(fighters);
// Terminal[

// { id: 'f2', name: 'sindel' },
// { id: 'f3', name: 'jade' },
// { id: 'f4', name: 'subzero' }
// ]

const nameOfFighters = fighters.map((fighter)=>{
    return(fighter.name)
});
console.log(nameOfFighters)
//Terminal[ 'noob saibot', 'sindel', 'jade', 'subzero' ]

module.exports = fighters

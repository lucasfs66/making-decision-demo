/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {

console.log("Jon Snow has better attack than Jamie Lammister")

} else if (jonSnowAttack < jamieLannisterAttack){
 console.log("Jamie Lamister has better attack than Jon Snow")
} else {
    console.log("Jamie Lannister has the same attack as Jon Snow")
}

let jonSnowHealth = 100;
let JonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has geen slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}
JonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - JonSnowDefense) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - JonSnowDefense)
    console.log(`Jon Swon's Health is down to ${jonSnowHealth}`)
}
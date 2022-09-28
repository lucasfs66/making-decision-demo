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

if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50 
}

console.log(`jon Snow helth after the helth kit is ${jonSnowHealth}`)

let coinLandsHeads = true

if (coinLandsHeads) {
    console.log("The fight continues")
} else {
    console.log("Jon is allowed to run away")
}

for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - JonSnowDefense)
    console.log("Jon's health is now" + jonSnowHealth)
}
//Post-lab assignment 1:
//Write logic in the for loop that detects if Jon's health gets 0 or less, in which case, you will print that Jon is dead
//   and you will stop futher loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic your wrote for the first assignement) as a while loop.
//   it should behave exactly the same
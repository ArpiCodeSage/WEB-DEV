
const btn=document.querySelector("button");
btn.addEventListener("click",func);
function func()
{
    const name=prompt("What is your name?")
    const greeting=document.querySelector("#greeting");
    greeting.textContent=`HEY!${name}`
}
let text="there are cats,dogs,cats and dogs"
let t=text.replaceAll("cats","dogs");
let s=text.replace(/cats/g,"dogs")
let r=text.replace("cats","dogs")
console.log(t + "\n " +s + "\n "+  r)
let a=text.split(" ");
console.log("\n"+a)
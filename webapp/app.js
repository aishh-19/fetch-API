let container = document.querySelector("#container");
let mealbtn = document.querySelector("#get-category-data")
let ingredentbtn= document.querySelector("#get-ingredent-data")
mealbtn.addEventListener("click",(ele)=>{
    getMeal(ele);
})
ingredentbtn.addEventListener("click",(ele2)=>{
    getingredent(ele2);
})
async function getMeal(ele){
try{
    let mealApi = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
let readable = await mealApi.json();
console.log(readable);
}
catch{
    console.log("error occured")
}
}
async function getingredent(ele2){
  try{
    let ingitem = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    let readable = await ingitem.json();
    console.log(readable);
  }
  catch{
    console.log("error occuredXX");
  }
}
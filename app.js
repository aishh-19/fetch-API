let button = document.querySelector(".btn");
button.addEventListener("click",(arr)=>{
    getAPI();
})
async function getAPI(){
try{
    let API = await fetch('https://jsonplaceholder.typicode.com/todos')  ;
    let reads = await API.json();
console.log(reads); 
render(reads);
}
catch{
    console.log("err")
}
}
function render(data){
    let container = document.querySelector(".container")
    container.innerHTML= "";
  data.forEach(function (ele) {
    let card = document.createElement("div");
    card.classList.add("card");
        let note = document.createElement("h4");
    note.innerHTML = ele.title;
    card.append(note);
    container.append(card);
})
}
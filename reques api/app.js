let button = document.querySelector(".fetchbtn");
button.addEventListener("click",(ele)=>{
    getuserData();
})
async function getuserData(){
   try{
    let api = await fetch("https://reqres.in/api/users?page=2");
    let readable = await api.json();
    console.log(readable);
    showData(readable.data);
   }catch{
    console.log("err")
   }
}
function showData(arr){
    let container = document.querySelector(".container");
    container.classList.add("container");
    container.innerHTML = ""
    arr.forEach((ele)=>{
        let imge = document.createElement("img")
        imge.src = ele.avatar
        let card = document.createElement("div")
        card.classList.add("card")
        let email = document.createElement("h5")
        let firstNAme = document.createElement("h5");
        firstNAme.innerHTML = `first name : ${ele.first_name}`;  
        let lastNAme = document.createElement("h5");
        lastNAme.innerHTML =`last name : ${ ele.last_name}`;
        email.textContent = `email: ${ele.email}`;

card.append(imge ,firstNAme ,  lastNAme,email);
container.append(card);
    });
}
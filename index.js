const populate = document.querySelector("section")
const getData = async ()=>{
 await fetch('http://localhost:8080/people')
  .then(res=>res.json())
  .then((data)=>{
    populate.innerHTML = data
    console.log(data)
  }).catch(err=>console.log(err))
}










const btn = document.getElementById("btn")
btn.addEventListener("click", getData) 

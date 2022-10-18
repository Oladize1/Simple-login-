const populate = document.querySelector("section")
const getData = async ()=>{
 await fetch('http://localhost:8080/people')
  .then(res=>res.json())
  .then((data)=>{
    populate.innerHTML = data
    console.log(data)
  }).catch(err=>console.log(err))
}

/*const getData = async () => {
  try{
    const data = await fetch('http://localhost:8080/people')
    .then(res=>res.json())
    populate.innerHTML = data
  }catch(err){
    populate.innerHTML = `Error fetching data from server ${err} `
  }
}*/
const btn = document.getElementById("btn")
btn.addEventListener("click", getData)
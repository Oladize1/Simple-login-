const populate = document.querySelector(".sec")
const loginData = document.getElementById("login")
function data() {
  fetch('http://localhost:8080/people')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const {message} = data
      message.forEach(msg=>{
        const {name} = msg
        populate.innerHTML = `<ul>
          <li>
            ${name}
          </li>
        </ul>`
      })
    })
    .catch(err => console.error(err))
}

const btn = document.getElementById("btn").addEventListener("click", data)

// need to know why this function do not work
const getData = async () => {
  console.log('button is clicked')
  await fetch('http://localhost:8080/people')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    }).catch(err => console.log(err))
}
/*--------------------------------------*/


const getUser = async (e) => {
  e.preventDefault()
  const name = document.getElementById('name').value
  console.log(name)
  await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "content-Type": 'application/json'
    },
    body: JSON.stringify(name)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", getUser)

function game() {
  for (let i = 1; i < 2; i++) {
    console.log(i)
    for (let j = 2; j < 3; j++) {
      console.log(i,j)
      for (let k = 3; k < 4; k++) {
        console.log(i,j,k);
        
      }
      
    }
  }
}
game()

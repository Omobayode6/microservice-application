//Select Element
const test = document.getElementById("test")
const button = document.getElementById("cta")

//Event Listener
button.addEventListener('click', displayText);

//Fuction
async function displayText(){
    try{
      const res = await fetch("http://localhost:8000/test");
      const data = await res.text();
      test.innerText = data
      if(!res.ok){
        console.log(data.description)
        return;
      }
    }catch(error){
      console.log(error);
    }
  }
  




const container = document.querySelector("container")
const newPersonButton = document.querySelector("#newPersonButton")
const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  newPersonButton.addEventListener('click' ()=>{

    function fetchData(){
            var data = fetch('https://randomuser.me/api/')
              .then( res => res.json() )
              .then( function(data){
                  fullname.innerText = `${data.results[0]["name"]["first"]}${data.results[0]["name"]["first"]}`
              })
    }
  })
});


//######################################################################
//
// console.log("Hello")
//
// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi")
//   })
//
// console.log("Sup?")
//
//
// //####################################################################
//
// function fetchData(){
//         var data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( res => res )
//         console.log(data)
// }
//
// fetchData()
//

//######################################################################
//
// function fetchData(){
//         var data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( json => console.log(json) )
// }
//
// fetchData()

//##############################################################

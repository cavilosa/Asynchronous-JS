let baseURL = "http....";
let apiKey = "&appid=0fvdv..";
//const fav = document.getElementById("fav").value;
const newAnimal = document.getElementById("animal").value;
const fav = document.getElementById("fav").value;

document.getElementById("generate").addEventListener("click", performAction);
// faking an api call

function performAction(event) {
    //const newAnimal = document.getElementById("animal").value;
    const fav = document.getElementById("fav").value;

    getAnimal("/fakeAnimalData")
    .then ( function (data) {
        //console.log(data);
        //console.log(fav);
      postData("/addAnimal", {animal:data.animal, fact:data.fact, fav:fav} );
        })

      updateUI();
}

// Async POST
const postData = async ( url = '', data = {})=>{
    const fav = document.getElementById("fav").value;
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

const getAnimal = async ( url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log("data from getanimal", data);
        return data;
    } catch(error){
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch("/all")
    try{
        const allData = await request.json();
        console.log(allData);
    document.getElementById("animalName").innerHTML = allData[0].animal;
    document.getElementById("animalFact").innerHTML = allData[0].facts;
    document.getElementById("animalFav").innerHTML = allData[0].fav;
    } catch (error) {
        console.log("error", error);
    }
}
/*
// Async GET
const retrieveData = async (url='') =>{
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// TODO-Chain your async functions to post an animal then GET the resulting data
/*
function postGet() {
    postData("/animal", {fav:"lion"})
    .then( function(data) {
        retrieveData("/all");
})
}
postGet();*/

//postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:fav});

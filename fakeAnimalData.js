let baseURL = "http....";
let apiKey = "&appid=0fvdv..";
//const fav = document.getElementById("fav").value;
const newAnimal = document.getElementById("animal").value;

document.getElementById("generate").addEventListener("click", performAction);
// faking an api call

function performAction(e) {
    getAnimalDemo(baseURL, newAnimal, apiKey)
}

const getAnimalDemo = async (baseURL, animal, key)=> {
    const res = await fetch("/fakeAnimalData");
    try {
        const data = await res.json();
        console.log("data", data);
        //postData("/addAnimal", data);
    } catch (error) {
        console.log("error");
        console.error;
    }
}

/*
function performAction(event) {

    const fav = document.getElementById("fav").value;

    getAnimal("/fakeAnimalData");
    .then(function(data)) {
        //console.log(data);
        postData("/addAnimal", {animal:data.animal, fact:data.fact. fav:fav});
}

const getAnimal = async (url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    }
}

const postData = async (url="", data={}) => {
    //console.log(data);
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Context-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }

}
// faking is done
*/
/*
function performAction(event) {
    getAnimalDemo(baseURL, newAnimal, apiKey)
}

const getAnimalDemo = async (baseURL, animal, key) => {
    const res = await fetch(baseURL+animal+key)

    try {
        const data = await res.json();
        console.log(data)//расшифровка полученнной инфо от гет запроса
    } catch(error) {
        console.error;
        console.log("error", error);
    }
}
*/

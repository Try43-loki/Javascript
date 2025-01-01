var index = 0;
var animalList =[
    {   
        "name":"Tiger",
        "url": "https://th.bing.com/th?id=OIP.wOIYcd3giZ-DTkfzFugylwHaH6&w=241&h=258&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
    },
    {   
        "name":"Lion",
        "url": "https://www.freeiconspng.com/thumbs/lion-png/amazing-lion-png-clipart-6.png"
    },
    {   
        "name":"Dog",
        "url": "https://p7.hiclipart.com/preview/279/812/970/lovely-long-haired-dog-tongue-thumbnail.jpg"
    },
    {   
        "name":"Cow",
        "url": "https://www.freepnglogos.com/uploads/cow-png/cow-dairy-farms-american-dairy-association-north-east-35.png"
    },
];
function flage(){
   
    document.getElementById("animal").src = animalList[index].url;
    document.getElementById("Animalnmame").innerHTML = animalList[index].name;
}
function nextslide(){
  
    if(index >= (animalList.length-1)){
        index =0;
    }else {
        index = index + 1;
    }
    
    document.getElementById("animal").src = animalList[index].url;
    document.getElementById("Animalnmame").innerHTML = animalList[index].name;
}
function previousslide(){
    if(index <= 0){
        index =0;
    }else {
        index = index - 1;
    }
    
    document.getElementById("animal").src = animalList[index].url;
    document.getElementById("Animalnmame").innerHTML = animalList[index].name;

}
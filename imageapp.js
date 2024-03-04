
/**
 * Author: Carlie Peters
 * Assignment: ImageSwapping 2 with Arrays
 */

console.log('Arrays Code')


let skinSet = ['ellephoenix.png','mobster.png','undead.png','woman.png']
let buildSet = ['diningroom.png','hallway.png', 'beefarm.png','willowisps.png']
let twoArrays = [skinSet,buildSet]

//Set images



/**
 * 
 * @param {object} ev 
 * @returns - void
 * 
 */
function UpdateThumbnails(ev){
    let switcher = document.getElementById('ellephoenix');
    switcherFileName = switcher.src.split('/').pop();
    skinSetFileName = skinSet[0]
    console.log('Switcher source: ' + switcher);
    console.log('SkinSet Source: ' + skinSet[0]);
    
    if (switcherFileName === skinSetFileName){
        console.log('Switching to buildSet');
        document.getElementById('ellephoenix').src = 'images/' + buildSet[0];
        document.getElementById('mobster').src = 'images/' + buildSet[1];
        document.getElementById('ice_king').src = 'images/' + buildSet[2];
        document.getElementById('woman').src = 'images/' + buildSet[3];
        
    }else{
        console.log('Switching to skinSet');
        document.getElementById('ellephoenix').src = 'images/' + skinSet[0];
        document.getElementById('mobster').src = 'images/' + skinSet[1];
        document.getElementById('ice_king').src = 'images/' + skinSet[2];
        document.getElementById('woman').src = 'images/' + skinSet[3];
    }

    

}

document.getElementById('mainImageDisplay').addEventListener('dblclick',UpdateThumbnails)

/**
 * 
 * 
 * @param {object} ev  
 * @returns {} - void
 *
 */
function UpdateLargeImage(ev){

    console.log(ev.target.id + ' was clicked');
    let mainDiv = document.getElementById('mainImageDisplay');
    mainDiv.innerHTML = "";
    

    let myImage = document.createElement("img");
    myImage.src = ev.target.src;


    myImage.alt = ev.target.alt;

    myImage.className = ev.target.getAttribute("data-class");

    
    
    //document.querySelector('#mainImage').src = ev.target.src;
    // document.querySelector('#mainImageDisplay').className = ev.target.getAttribute("data-class");

    mainDiv.appendChild(myImage);

}

//These are the event listeners
document.getElementById('ellephoenix').addEventListener('click', UpdateLargeImage);

document.getElementById('mobster').addEventListener('click', UpdateLargeImage);

document.getElementById('ice_king').addEventListener('click', function (ev){

    UpdateLargeImage(ev);
});

document.getElementById('woman').addEventListener('click', (ev)=>{
    UpdateLargeImage(ev);
    
});

//update
loadSettings()
window.addEventListener('load',UpdateThumbnails)

/**
 * @param {*} none
 * 
 */
function loadSettings(){

    let mainDiv = document.getElementById('mainImageDisplay');
    mainDiv.innerHTML = "";
    let myImage = document.createElement("img");
    
    
    myImage.src = 'images/ellephoenix.png';
    myImage.alt = 'Load Image';

    myImage.className = 'image1';

    mainDiv.appendChild(myImage)

}

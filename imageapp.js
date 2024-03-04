
/**
 * Author: Carlie Peters
 * Assignment: ImageSwapping 2 with Arrays
 */

console.log('Arrays Code')


let skinSet = ['ellephoenix.png','mobster.png','undead.png','woman.png']
let buildSet = ['diningroom.png','hallway.png', 'beefarm.png','willowisps.png']

//Multidimensional array
let imageSetsArray = [skinSet,buildSet]


/**
 * 
 * @param {object} ev 
 * @returns - void
 * takes in object ev when image is double clicked
 */
function UpdateThumbnails(ev){
    let j = 0;
    let switcher = document.getElementById('ellephoenix');
    switcherFileName = switcher.src.split('/').pop();
    skinSetFileName = skinSet[0]
    console.log('Switcher source: ' + switcher);
    console.log('SkinSet Source: ' + skinSet[0]);
    console.log(ev.target +' was clicked')

    //multidimentional array stores the objects that will be changed
    let imageThumbnails = [document.getElementById('ellephoenix'),document.getElementById('mobster'),document.getElementById('ice_king'),document.getElementById('woman')];
    
    if(switcherFileName === skinSetFileName){
        console.log('Switching to Buildset')
        j = 1
    }else{
        console.log('Switching to Skin Set')
        j = 0
    }


    for(i = 0; i < imageThumbnails.length; i++){
        imageThumbnails[i].src = 'images/' + imageSetsArray[j][i];
    }


    //Old code
    // if (switcherFileName === skinSetFileName){
    //     console.log('Switching to buildSet');
    //     document.getElementById('ellephoenix').src = 'images/' + buildSet[0];
    //     document.getElementById('mobster').src = 'images/' + buildSet[1];
    //     document.getElementById('ice_king').src = 'images/' + buildSet[2];
    //     document.getElementById('woman').src = 'images/' + buildSet[3];
        
    // }else{
    //     console.log('Switching to skinSet');
    //     document.getElementById('ellephoenix').src = 'images/' + skinSet[0];
    //     document.getElementById('mobster').src = 'images/' + skinSet[1];
    //     document.getElementById('ice_king').src = 'images/' + skinSet[2];
    //     document.getElementById('woman').src = 'images/' + skinSet[3];
    // }

    

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

    mainDiv.appendChild(myImage);
}


//Timer stuff

//prints out all values in the imageSetArray for reference
for(let i = 0; i < imageSetsArray.length; i ++){
    for(let j = 0; j <imageSetsArray[i].length; j++){
        console.log("From multidimensional array: " + imageSetsArray[i][j]);
    }
}


/**
* Purpose- Extract a random string from an array. 
* @param {Array[array]} expects an array of array of strings that will be image src file names
* @returns {string} returns a random string from the array
* @example
* 
*/
function randomImage(array){
    //Choses random number based on the length of the array
    let i = Math.floor(Math.random() * array.length);
    //Get an array based on the random number
    let j = Math.floor(Math.random() * array[i].length);
    //returns the string.
    return array[i][j]
}

/**
 * 
 * @param {} - void
 * @returns {} -void
 * constantly running interval function that updates the cycle of images
 * Timer is started when page is read starts
*/

setInterval(()=>{
    let mainDiv = document.getElementById('mainImageDisplay');
    mainDiv.innerHTML = "";
    

    let myImage = document.createElement("img");
    myImage.src = "images/" + randomImage(imageSetsArray);
    checker = "images/" + myImage.src.split('/').pop();
    console.log('images/' + imageSetsArray[0][1]);
    console.log(myImage.src);
    console.log(checker);

    myImage.alt = 'switching through Array';

    if (checker == 'images/' + imageSetsArray[0][0]){
        console.log(imageSetsArray[0][0])
        myImage.className = 'image1';
    }else if(checker == 'images/' + imageSetsArray[0][1]){
        myImage.className = 'image2';
    }else if(checker == 'images/' + imageSetsArray[0][2]){
        myImage.className = 'image3';
    }else if(checker == 'images/' + imageSetsArray[0][3]){
        myImage.className = 'image4';
    }else{
        myImage.className = 'default';
    }
    

    mainDiv.appendChild(myImage);
}, 3000)

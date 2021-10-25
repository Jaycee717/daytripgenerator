"use strict"

let randomDestination = ['Washington D.C.', 'Baltimore MD', 'Jacksonville FL','Lancaster PA', 'Toronto ON'];
let randomRestaurant = ['Buffalo Wild Wings', 'Cheddars', 'Mcdonalds','Hibachi', 'Old San Juan'];
let randomTransportation = ['Plane','Car','Bike','Running','InstantTrnasmission']
let randomEntertainment = ['Movie','Paintball','Concert','Bon Fire','Stay Inside']

function randomlyPickDestination(finalDestination){
    let chosenDestination = Math.floor(Math.random() * 
    randomDestination.length);
    if(chosenDestination === 0){
        finalDestination = randomDestination[0];
    } else if(chosenDestination === 1){
        finalDestination = randomDestination[1];
    } else if(chosenDestination === 2){
        finalDestination = randomDestination[2];
    } else if(chosenDestination === 3){
        finalDestination = randomDestination[3];
    } else if(chosenDestination === 4){
        finalDestination = randomDestination[4];
    }
    return finalDestination
}

function randomlyPickRestaurant(finalRestaurant){
    let chosenRestaurant = Math.floor(Math.random() * 
    randomRestaurant.length);
    if(chosenRestaurant === 0){
        finalRestaurant = randomRestaurant[0];
    } else if(chosenRestaurant === 1){
        finalRestaurant = randomRestaurant[1];
    } else if(chosenRestaurant === 2){
        finalRestaurant = randomRestaurant[2];
    } else if(chosenRestaurant === 3){
        finalRestaurant = randomRestaurant[3];
    } else if(chosenRestaurant === 4){
        finalRestaurant = randomRestaurant[4];
    }
    return finalRestaurant
}

function randomlyPickTransportation(finalTransportation){
    let chosenTransportation = Math.floor(Math.random() * 
    randomTransportation.length);
    if(chosenTransportation === 0){
        finalTransportation = randomTransportation[0];
    } else if(chosenTransportation === 1){
        finalTransportation = randomTransportation[1];
    } else if(chosenTransportation === 2){
        finalTransportation = randomTransportation[2];
    } else if(chosenTransportation === 3){
        finalTransportation = randomTransportation[3];
    } else if(chosenTransportation === 4){
        finalTransportation = randomTransportation[4];
    }
    return finalTransportation
}

function randomlyPickEntertainment(finalEntertainment){
    let chosenEntertainment = Math.floor(Math.random() * 
    randomEntertainment.length);
    if(chosenEntertainment === 0){
        finalEntertainment = randomEntertainment[0];
    } else if(chosenEntertainment === 1){
        finalEntertainment = randomEntertainment[1];
    } else if(chosenEntertainment === 2){
        finalEntertainment = randomEntertainment[2];
    } else if(chosenEntertainment === 3){
        finalEntertainment = randomEntertainment[3];
    } else if(chosenEntertainment === 4){
        finalEntertainment = randomEntertainment[4];
    }
    return finalEntertainment
}


let destinationAnswer = 'Destination' + ' ' + randomlyPickDestination() 
let restaurantAnswer = 'Restaurant' + ' ' + randomlyPickRestaurant()
let transportationAnswer = 'Transportation' + ' ' + randomlyPickTransportation()
let entertainmentAnswer= 'Entertainment' + ' ' + randomlyPickEntertainment()

alert('Your Trip Details \n \n' + destinationAnswer + '\n' + restaurantAnswer + '\n' + transportationAnswer + '\n' + entertainmentAnswer);

let myName = window.prompt('Are you satisfied')
console.log("hello", myName)
"use strict"

let randomDestination = ['Washington D.C.', 'Baltimore MD', 'Jacksonville FL','Lancaster PA, Toronto ON'];
let randomRestaurant = ['Buffalo Wild Wings', 'Cheddars', 'Mcdonalds','Hibachi', 'Old San Juan'];
let randomTransportation = ['Plane','Car','Bike','Running','InstantTrnasmission']
let randomEntertainment = ['Movie','Paintball','Concert','Bon Fire','Stay Inside']

function randomlyPickDestination(finalDestination){
    let chosenDestination = Math.floor(Math.random() * 
    finalDestinationAnswer.length);
    if(chosenDestination === 0){
        finalDestination = finalDestinationAnswer[0];
    } else if(chosenDestination === 1){
        finalDestination = finalDestinationAnswer[1];
    } else if(chosenDestination === 2){
        finalDestination = finalDestinationAnswer[2];
    } else if(chosenDestination === 3){
        finalDestination = finalDestinationAnswer[3];
    } else if(chosenDestination === 4){
        finalDestination = finalDestinationAnswer[4];
    }
    return finalDestination
}

function randomlyPickRestaurant(finalRestaurant){
    let chosenRestaurant = Math.floor(Math.random() * 
    finalResaturantAnswer.length);
    if(chosenRestaurant === 0){
        finalRestaurant = finalRestaurantAnswer[0];
    } else if(chosenRestaurant === 1){
        finalRestaurant = finalRestaurantAnswer[1];
    } else if(chosenRestaurant === 2){
        finalRestaurant = finalRestaurantAnswer[2];
    } else if(chosenRestaurant === 3){
        finalRestaurant = finalRestaurantAnswer[3];
    } else if(chosenRestaurant === 4){
        finalRestaurant = finalResaturantAnswer[4];
    }
    return finalRestaurant
}

function randomlyPickTransportation(finalTransportation){
    let chosenTransportation = Math.floor(Math.random() * 
    finalTransportationAnswer.length);
    if(chosenTransportation === 0){
        finalTransportation = finalTransportationAnswer[0];
    } else if(chosenDestination === 1){
        finalTransportation = finalTransportationAnswer[1];
    } else if(chosenDestination === 2){
        finalTransportation = finalTransportationAnswer[2];
    } else if(chosenDestination === 3){
        finalTransportation = finalTransportationAnswer[3];
    } else if(chosenDestination === 4){
        finalTransportation = finalTransportationAnswer[4];
    }
    return finalTransportation
}

function randomlyPickEntertainment(finalEntertainment){
    let chosenEntertainment = Math.floor(Math.random() * 
    finalEntertainmentAnswer.length);
    if(chosenEntertainment === 0){
        finalEntertainment = finalEntertainmentAnswer[0];
    } else if(chosenEntertainment === 1){
        finalEntertainment = finalEntertainmentAnswer[1];
    } else if(chosenEntertainment === 2){
        finalEntertainment = finalEntertainmentAnswer[2];
    } else if(chosenEntertainment === 3){
        finalEntertainment = finalEntertainmentAnswer[3];
    } else if(chosenEntertainment === 4){
        finalEntertainment = finalEntertainmentAnswer[4];
    }
    return finalEntertainment
}


let destinationAnswer = 'Destination' + ' ' + randomlyPickDestination() 
let restaurantAnswer = 'Restaurant' + ' ' + randomlyPickRestaurant()
let transportationAnswer = 'Transportation' + ' ' + randomlyPickTransportation()
let entertainmentAnswer= 'Entertainment' + ' ' + randomlyPickEntertainment()

alert('Your Trip Details \n \n' + destinationAnswer + '\n' + restaurantAnswer + '\n' + transportationAnswer + '\n' + entertainmentAnswer);

let human = prompt('Please type yes, or no.') 
console.log(prompt) 
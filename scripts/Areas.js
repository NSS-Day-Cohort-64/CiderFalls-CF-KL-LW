//import parkAreas and guests arrays from database
import { getParkAreas, getGuests } from "./database.js"

//store the return value of the function getParkAreas in variable
const parkAreas = getParkAreas()
//store the return value of the function getGuests in variable

const guests = getGuests()

//start function with two parameters to iterate through and compare each guest
//OBJECT against the entire areas ARRAY
const getCount = (parkAreaId) => {
    // Start a counter variable at 0
    let guestCount = 0
    //begin iterating through the areas ARRAY
    for (const guest of guests) {
        if (guest.parkAreaId === parkAreaId) {
            guestCount++
        }
    }
    return guestCount
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    //was a parkArea list item clicked?
    if (itemClicked.dataset.type === "area") {
        const parkAreaId = parseInt(itemClicked.dataset.id)
        window.alert(`There are ${getCount(parkAreaId)} guests at this area.`)
    }
}
)
//start an if statement to check if the id of the parkArea object matches the
//area id corresponding to each guest

//if it matches, set the matched area object equeal to area

//return the whole area object that matched



//add event listener whose purpose is to show the current number 
//of park guests in each respective area 

//check to see if a parkArea item was clicked

//if a parkArea list item was clicked, windowalert showing the matching
//





//function to return the html. this should ONLY 
export const areasList = () => {
    let html = "<ul>"

    for (const area of parkAreas) {

        html += `<li  data-type="area"  
                    data-id="${area.id}" 
                    >
                    ${area.name}
                </li>`
    }

    html += "</ul>"

    return html
}

//display a list of the park areas and should have data attributes
//for areasId, and type of "areas"




// //Function: responsibility is to find the service for a parkService
// const findServices = (parkServiceObject, serviceArray) => {
//     //set an empty variable
//     let placeService = null

//     //for...of loop iterating through serviceArray
//     for (const service of serviceArray) {
//         //if service iteration.id === areaServiceObject.serviceId
//         if (service.id === parkServiceObject.serviceId) {
//             placeService = service
//         }
//     }
//     //return a service object
//     return placeService
// }
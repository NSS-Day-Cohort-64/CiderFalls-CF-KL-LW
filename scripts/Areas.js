//import parkAreas and guests arrays from database
import { getParkAreas, getGuests, getServices, getParkServices } from "./database.js"




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
// const services = getServices()
// const bridgeTableArray = getParkServices()

// const relatedServices = (bridgeTable, service) => {
//     let servicesArray = [];


//     for (const bridgeTable of bridgeTableArray) {
//         if (bridgeTable.serviceId === servicesId) {
//             const areaMatch = findAreas(parkService, areasList);
//             areasArray.push(areaMatch.name);
//         }
//     }
//     if (areasArray.length === 0) {
//         return 'This service is not provided in any areas';
//     } else {
//         return ` is available in ${areasArray.join(' , ')}`;
//     }
// };


const parkServices = getParkServices();
const services = getServices();


export const areasList = () => {
    let areaHtml = `<div class="areaBox">`;
    //debugger
    for (const area of parkAreas) {
        areaHtml += `<div class="serviceLists" data-type="area" data-id="${area.id}" data-name="${area.name}"> </aside> <div class="areaTitle"><br> ${area.name}</div><br>`;
        for (const areaService of parkServices) {
            if (area.id === areaService.parkAreaId) {
                for (const service of services) {
                    if (areaService.serviceId === service.id) {
                        areaHtml += `<li>${service.name}</li><br>`;
                    }
                }
            }
        }
        areaHtml += `</div>`;
    }
    areaHtml += `</div>`;
    return areaHtml;
};


// export const areasList = () => {
//     let html = `<article class="areasCard">`

//     for (const area of parkAreas) {

//         html += `<section class="areaCards"data-type="area"  
//                     data-id="${area.id}">
//                     <h2> ${area.name} </h2>
//                         <ul>${relatedServices}</ul>
                    
                    
                    
                    
//                 </section>`
//     }

//     html += `</ul>`

//     return html
// }




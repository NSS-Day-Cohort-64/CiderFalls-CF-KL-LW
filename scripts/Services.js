import { getGuests, getParkAreas, getParkServices, getServices } from "./database.js";

const guestsList = getGuests()
const areasList = getParkAreas()
const servicesList = getServices()
const parkServicesList = getParkServices()

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

//Function: responsibility is to find the area for a parkService
const findAreas = (parkServiceObject, areaArray) => {
    //set an empty variable
    let placeArea = null

    //for...of loop iterating through areaArray
    for (const area of areaArray) {
        //if area iteration.id === areaServiceObject.areaId
        if (area.id === parkServiceObject.parkAreaId) {
            placeArea = area
        }
    }
    //return an area object
    return placeArea
}

const findMessage = (serviceId, serviceName) => {
    let areasArray = [];

    for (const parkService of parkServicesList) {
        if (parkService.serviceId === serviceId) {
            const areaMatch = findAreas(parkService, areasList);
            areasArray.push(areaMatch.name);
        }
    }
    if (areasArray.length === 0) {
        return 'This service is not provided in any areas';
    } else {
        return `${serviceName} is available in ${areasArray.join(' , ')}`;
    }
};

document.addEventListener('click', (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "service") {
        const serviceId = parseInt(itemClicked.dataset.id);

        for (const service of servicesList) {
            if (service.id === serviceId) {
                const alert = findMessage(serviceId, service.name);
                window.alert(alert);
            }
        }
    }
});


export const serviceList = () => {
    let html = "<ul>"

    for (const service of servicesList) {

        html += `<li  data-type="service"  
                    data-id="${service.id}" 
                    data-name="${service.name}" >
                    ${service.name}
                </li>`
    }

    html += "</ul>"

    return html
}

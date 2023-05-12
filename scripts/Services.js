import { getGuests, getParkAreas, getParkServices, getServices } from "./database.js";

const guestsList = getGuests()
const areasList = getParkAreas()
const servicesList = getServices()
const parkServicesList = getServices()

//Function: responsibility is to find the service for a parkService
//define a getService function with two parameters: parkServiceObject and serviceArray
//set an empty variable
//for...of loop iterating through serviceArray
//if service iteration.id === areaServiceObject.serviceId
//variable = service iteration(object)
//return a service object
//!!!!!

//Function: responsibility is to find the area for a parkService
//define a getArea function with two parameters: parkServiceObject and areaArray     
//set an empty variable

//for...of loop iterating through parkAreaArray
//if area iteration.id === parkServiceObject.areaId
//variable = area iteration(object)

//return a area object

//Function: responsibility to build message by looping through parkService 
//define a getMessage function with serviceId parameter
//set empty serviceArray  (use let, so that it ca be modified)

//for ...of loop iterating through parkService array
//if parkService iterator serviceId === parameter
//define variable equal to getArea function passing iterated parkService and areas array as arguments - this will return an object
//push returned object into serviceArray

//if 

//Click event

//was a 


export const serviceList = () => {
    let html = "<ul>"

    for (const service of servicesList) {

        html += `<li  data-type="service" data-name="${service.name}" >
        ${service.name}
        </li>`
    }

    html += "</ul>"

    return html
}

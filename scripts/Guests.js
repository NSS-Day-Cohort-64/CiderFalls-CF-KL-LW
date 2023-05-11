import { getGuests } from "./database.js";
//  import from database. 
//create function with a variable name getGuests. 
//create a for loop that iterates through the guests object in function.
let guests = getGuests()


export const guestList = () => {
    let html = "<ul>"

for (const guest of guests) {

    html += `<li  data-type="product" data-name="${guest.name}" >
        ${guest.name}
        </li>`
}

html += "</ul>"

return html
}


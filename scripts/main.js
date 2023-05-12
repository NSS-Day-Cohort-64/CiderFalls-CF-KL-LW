import { guestList } from "./Guests.js"
import { serviceList } from "./Services.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>CIDER FALLS</h1>
<article class="details">
    <section class="detail--column list details__services">
        <h2>Services</h2>
        ${serviceList()}
    </section>
    <section class="detail--column list details__park areas">
        <h2>Park Areas</h2>
        TO DO : !!!! add function
    </section>
</article>

<article class="guest names">
    <h2>GUESTS</h2>
    <section class="detail--column list details__names">
        <h2>Guests</h2>
        ${guestList()}
        
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

test
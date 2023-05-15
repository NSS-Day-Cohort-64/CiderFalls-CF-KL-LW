import { guestList } from "./Guests.js"
import { serviceList } from "./Services.js"
import { areasList } from "./Areas.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<div class="logo">
    <img src="/img/park-logo.png" alt="park logo">
    <h1 class="title">CIDER FALLS</h1>
</div>
<div class="mainOverall">
    <article class="detailsLeft">
        <section class="servicesBox">
            <h2>Services</h2>
            ${serviceList()}
        </section>

        <article>
        <h2>Park Areas</h2>
        <section class="areasBoxMain">
                <div class="areasList">
                ${areasList()}
                </div>
            </section>
        </article>
    </article>
    <article class="guestRight">
        <h2>Guests</h2>
        <section class="guestList">
            ${guestList()}
        </section>
    </article>
</div>
`

mainContainer.innerHTML = applicationHTML

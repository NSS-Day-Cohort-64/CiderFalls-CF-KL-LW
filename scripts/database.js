//create database containing 3 arrays, each array containing objects.
//one array each for guests, services, and areas
const database = {
    guests: [
        { id: 1, name: "Bubba Joe", parkAreaId: 4 },
        { id: 2, name: "Billy Bob", parkAreaId: 4 },
        { id: 3, name: "Cletus Lee", parkAreaId: 6 },
        { id: 4, name: "Daisy May", parkAreaId: 5 },
        { id: 5, name: "Earl Ray", parkAreaId: 3 },
        { id: 6, name: "Ellie May", parkAreaId: 4 },
        { id: 7, name: "Gator Jack", parkAreaId: 1 },
        { id: 8, name: "Hank Williams", parkAreaId: 2 },
        { id: 9, name: "Jethro Bodine", parkAreaId: 3 },
        { id: 10, name: "Loretta Lynn", parkAreaId: 1 },
        { id: 11, name: "Mabel Sue", parkAreaId: 2 },
        { id: 12, name: "Otis Redding", parkAreaId: 3 },
        { id: 13, name: "Patsy Cline", parkAreaId: 3 },
        { id: 14, name: "Rascal Ray", parkAreaId: 5 },
        { id: 15, name: "Sadie Lou", parkAreaId: 1 },
        { id: 16, name: "Skeeter Davis", parkAreaId: 2 },
        { id: 17, name: "Slim Chance", parkAreaId: 2 },
        { id: 18, name: "Tex Ritter", parkAreaId: 6 },
        { id: 19, name: "Wilma Jean", parkAreaId: 4 },
        { id: 20, name: "Wyatt Earp", parkAreaId: 4 },
        { id: 21, name: "Billy Ray", parkAreaId: 3 },
        { id: 22, name: "Bobby Joe", parkAreaId: 1 },
        { id: 23, name: "Buck Owens", parkAreaId: 6 },
        { id: 24, name: "Cooter Brown", parkAreaId: 2 },
        { id: 25, name: "Dolly Parton", parkAreaId: 2 },
        { id: 26, name: "Emmett Otter", parkAreaId: 1 },
        { id: 27, name: "Flora Belle", parkAreaId: 4 },
        { id: 28, name: "Gomer Pyle", parkAreaId: 4 },
        { id: 29, name: "Hillbilly Hank", parkAreaId: 3 },
        { id: 30, name: "Jolene Carter", parkAreaId: 1 },
        { id: 31, name: "Merle Haggard", parkAreaId: 2 },
    ],
    parkAreas: [
        { id: 1, name: "Chamfort River" },
        { id: 2, name: "Lost Wolf Hiking Trail" },
        { id: 3, name: "Lodge" },
        { id: 4, name: "Gander River" },
        { id: 5, name: "Campgrounds" },
        { id: 6, name: "Pine Bluffs Trails" }
    ],
    services: [
        { id: 1, name: "Rafting" },
        { id: 2, name: "Canoeing" },
        { id: 3, name: "Fishing" },
        { id: 4, name: "Hiking" },
        { id: 5, name: "Picnicking" },
        { id: 6, name: "Rock Climbing" },
        { id: 7, name: "Information" },
        { id: 8, name: "Lodging" },
        { id: 9, name: "Parking" },
        { id: 10, name: "Zip Lines" }
    ],
    parkServices: [
        { id: 1, parkAreaId: 1, serviceId: 1 },
        { id: 2, parkAreaId: 1, serviceId: 2 },
        { id: 3, parkAreaId: 1, serviceId: 3 },
        { id: 4, parkAreaId: 2, serviceId: 4 },
        { id: 5, parkAreaId: 2, serviceId: 5 },
        { id: 6, parkAreaId: 2, serviceId: 6 },
        { id: 7, parkAreaId: 3, serviceId: 8 },
        { id: 8, parkAreaId: 3, serviceId: 9 },
        { id: 9, parkAreaId: 3, serviceId: 7 },
        { id: 10, parkAreaId: 3, serviceId: 5 },
        { id: 11, parkAreaId: 4, serviceId: 3 },
        { id: 12, parkAreaId: 4, serviceId: 4 },
        { id: 13, parkAreaId: 5, serviceId: 7 },
        { id: 14, parkAreaId: 5, serviceId: 8 },
        { id: 15, parkAreaId: 5, serviceId: 9 },
        { id: 16, parkAreaId: 6, serviceId: 4 },
        { id: 17, parkAreaId: 6, serviceId: 5 },
        { id: 18, parkAreaId: 6, serviceId: 10 }
    ]
};

//export each of the 4 arrays at the bottom

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}
export const getParkAreas = () => {
    return database.parkAreas.map(area => ({ ...area }))
}
export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}
export const getParkServices = () => {
    return database.parkServices.map(parkservice => ({ ...parkservice }))
}
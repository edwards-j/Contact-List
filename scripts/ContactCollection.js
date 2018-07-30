"use strict"

let contacts = [
    {
        name: "Jonathan",
        phone: "865-555-5555",
        address: "123 Drury Lane"
    },
    {
        name: "David",
        phone: "217-555-5555",
        address: "999 Road Street"
    },
    {
        name: "Edward",
        phone: "414-555-5555",
        address: "5854 Boulevard Ave"
    }
];


let stringifiedContacts = JSON.stringify(contacts)
localStorage.setItem("contacts", stringifiedContacts);

let getContacts = () => {
    return JSON.parse(localStorage.getItem("contacts"))
}

module.exports = getContacts;
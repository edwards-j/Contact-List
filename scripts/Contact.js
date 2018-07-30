"use strict"

let createContact = (name, phone, address) => {
    let contact =
    `<h2>${name}</h2>
    <p>Phone Number: ${phone}</p>
    <p>Address: ${address}</p>`

    return contact;
}

module.exports = createContact
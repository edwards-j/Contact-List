"use strict"

//Build out the contact list from local storage
let createContact = require("./Contact");
let getContacts = require("./ContactCollection");

// Get info from local Storage
// iterate over the contacts
// render them to the dom


function listContacts() {
    getContacts().forEach(contact => {
        writeToDom(createContact(contact.name, contact.phone, contact.address));
    })
}

let writeToDom = (contact) => {
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;
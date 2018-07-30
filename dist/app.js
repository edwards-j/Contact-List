(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

let createContact = (name, phone, address) => {
    let contact =
    `<h2>${name}</h2>
    <p>Phone Number: ${phone}</p>
    <p>Address: ${address}</p>`

    return contact;
}

module.exports = createContact
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict"

},{}],4:[function(require,module,exports){
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
},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict"

let form = require("./ContactForm");
let listContacts = require("./ContactList");

listContacts()
},{"./ContactForm":3,"./ContactList":4}]},{},[5]);

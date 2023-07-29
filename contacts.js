const fs = require("node:fs");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: udokumentuj każdą funkcję
function listContacts() {
  // ...twój kod
}

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
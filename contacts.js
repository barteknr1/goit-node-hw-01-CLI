const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data);
    return contacts;
  }
  catch {
    err => console.log(err.message);
  }
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find(({ id }) => id === contactId);
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newContacts = contacts.filter(({ id }) => id !== contactId);
  return fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const id = Date.now().toString();
  const newContact = { id, name, email, phone };
  contacts.push(newContact);
  return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
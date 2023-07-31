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
  console.log(contacts.find(({ id }) => id === contactId));
  // console.log(contacts);
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const contactsJSON = data.toString();
      const contacts = JSON.parse(contactsJSON);
      console.log(contacts.filter(({id}) => id !== contactId));
    })
    .catch(err => console.log(err.message));
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  const id = Date.now().toString();
  const newContact = {
    id, name, email, phone
  };
  console.log(newContact);
  console.log(contacts);
  //async await
  // contacts.push(newContact);
  // console.log(contacts)
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
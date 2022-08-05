const path = require('path');
const fs = require('fs').promises;
const { nanoid } = require('nanoid');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
    const data = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(data);   
}

async function getContactById(contactId) {
    const data = await listContacts();
    const contactById = data.find(contact => contact.id === contactId);
    if(!contactById){return null}
    return contactById
}

async function removeContact(contactId) {
    const data = await listContacts();
    const index = data.findIndex(item => item.id === contactId);
    if (index === -1) { return null };
    const [result] = data.splice(index, 1);
    fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return result;    
}

async function addContact({name, email, phone}) {
    const newContact = { id: nanoid(), name, email, phone };
    const data = await listContacts();
    data.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
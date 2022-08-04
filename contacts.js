// function getCurrentData() {
//     return Date.now()
// }

const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
    // fs.readFile(contactsPath, 'utf-8')
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
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
        const contactById = data.filter(contact => contact.id !== contactId);
        
}

async function addContact(name, email, phone) {
  const newContact = { id: '11', name, email, phone };
      const data = await listContacts();
        data.push(newContact);
        console.log('newContact', newContact);
        console.log('data', data);
        // console.log('result', result);
        // const contactById = data.filter(contact => contact.id !== contactId);
    
    // const newContact = { name, email, phone };
    // console.log(newContact);
}

// async function all() {
//     const data = await listContacts();
//     console.log("all", data)
// }

// all();
// getContactById('55');
// removeContact('101');
// addContact('Test', 'test2', "test3")

module.exports = {
    // getCurrentData,
    listContacts,
    getContactById,
    removeContact,
    addContact
}
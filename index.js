const { listContacts, getContactById, removeContact, addContact } = require("./contacts");
const { Command } = require("commander");
const program = new Command();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const contactList = await listContacts(); 
        console.log(contactList);
      break;

    case "get":
        const contactById = await getContactById(id);
        console.log(contactById);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const contactToDelete = await removeContact(id);
      console.log(contactToDelete);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
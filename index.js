// ВАРИАНТ С YARGS
// const yargs = require('yargs');

// const { hideBin } = require('yargs/helpers');

// const contactsOperations = require('./db');

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "getAll":
//       const contacts = await contactsOperations.getAll();
//       console.log(contacts);
//       break;
//     case "getById":
//       const contact = await contactsOperations.getById(id);
//       if (!contact) {
//         throw new Error(`Product with id: ${id} not found!`)
//       }
//       console.log(contact);
//       break;
//     case "add":
//       const contactObj = {
//         name,
//         email,
//         phone
//       }
//       const newContact = await contactsOperations.add(contactObj)
//       console.log(newContact);
//       break;
//     case "updateById":
//       const ContactObj = {
//         name,
//         email,
//         phone
//       }
//       const updateProduct = await contactsOperations.updateById(id, ContactObj);
//       console.log(updateProduct);
//       if (!updateProduct) {
//         throw new Error(`Product with id: ${id} not found!`)
//       }
//       break;
//     case "removeById":
//       const removeContact = await contactsOperations.removeById(id);
//       console.log(removeContact);
//       break;
//     default:
//       console.log("Unknow action!");
    
//   }
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactsOperations = require('./db');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;
    case "getById":
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Product with id: ${id} not found!`)
      }
      console.log(contact);
      break;
    case "add":
      const contactObj = {
        name,
        email,
        phone
      }
      const newContact = await contactsOperations.add(contactObj)
      console.log(newContact);
      break;
    case "updateById":
      const ContactObj = {
        name,
        email,
        phone
      }
      const updateProduct = await contactsOperations.updateById(id, ContactObj);
      console.log(updateProduct);
      if (!updateProduct) {
        throw new Error(`Product with id: ${id} not found!`)
      }
      break;
    case "removeById":
      const removeContact = await contactsOperations.removeById(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknow action!");
    
  }
}

invokeAction(argv);
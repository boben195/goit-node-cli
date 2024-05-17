import * as fs from "node:fs/promises";
import path from "node:path";




 
const contactsPath = path.resolve("db", "contacts.json");
async function readContacts() {
    const data = await fs.readFile(contactsPath, { encoding: "utf-8" })
    return data;
}
async function writeContacts(contacts) {
    await fs.writeFile(contactsPath, contacts)
}




async function listContacts() {
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
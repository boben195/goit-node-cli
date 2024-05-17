import * as fs from "node:fs/promises";
import path from "node:path";

import crypto from "node:crypto";


 
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
    const contacts = await readContacts();
    return contacts
}

async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await readContacts();
    const contact = contacts.find((contact => contact.id === contactId))
    if (typeof contact === "undefined") {
        return null;
    }
    return contact;
}

async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await readContacts();
    const index = contacts.findIndex((contact => contact.id === contactId))
    if (index === -1) {
        return null;
    }
    const removedContacts = contacts[index]
    contacts.splice(index, 1)
    await writeContacts(contacts)
    return removedContacts;''
}

async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
    const contacts = await readContacts();
    const newContact = { id: crypto.randomUUID(), name, email, phone };
    contacts.push(newContact);
    await writeContacts(contacts)
    return newContact;
}
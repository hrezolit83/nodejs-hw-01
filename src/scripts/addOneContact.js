// import { generateContacts } from './generateContacts.js';

import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (number) => {
  try {
    const prevContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const addContacts = [...prevContacts, ...newContacts];
    await writeContacts(addContacts);
    console.log(`Успішно додано ${number} контакт.`);
  } catch (error) {
    console.error(error);
  }
};

addOneContact(1);

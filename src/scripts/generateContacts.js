import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const prevContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const addContacts = [...prevContacts, ...newContacts];
    await writeContacts(addContacts);
    console.log(`Успішно згенеровано ${number} контактів.`);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);

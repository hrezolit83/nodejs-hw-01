import { readContacts } from '../utils/readContacts.js';

// import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return `Всього контактів: ${contacts.length}`;
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
  }
};

console.log(await countContacts());

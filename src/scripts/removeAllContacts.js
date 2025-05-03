// import { readContacts } from '../utils/readContacts.js';
import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('Всі контакти видалено успішно.');
  } catch (error) {
    console.error('Помилка видалення:', error.message);
  }
};

removeAllContacts();

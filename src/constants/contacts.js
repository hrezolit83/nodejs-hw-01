// import { fileURLToPath } from 'node:url';
import path from 'node:path';

// const fileName = fileURLToPath(import.meta.url);

const dirName = path.join(process.cwd());

export const PATH_DB = path.join(dirName, 'src', 'db', 'db.json');

console.log(PATH_DB);

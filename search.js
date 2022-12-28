import { create, insert, remove, search } from "@lyrasearch/lyra";
import data from './books.js'
const database = data
import fs from 'fs'
const query = "protocol";
const db = await create({
  schema: {
    author: "string",
    title: "string",
  },

});

for (const book of database) {
  await insert(db, {
    author: book.author,
    title: book.title,
  });
}
const searchResult = await search(db, {
  term: query,
  properties: "*",
  limit: database.length,
});
console.log(searchResult);

for (const hit of searchResult.hits) {
  hit.score = hit.score.toFixed(2);
}

fs.writeFile(query+'.json', JSON.stringify(searchResult.hits), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

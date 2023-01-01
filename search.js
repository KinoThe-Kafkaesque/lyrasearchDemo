import { create, insert, remove, search } from "@lyrasearch/lyra";
import data from './raw_data/json/output.json' assert { type: "json" };
const database = data
// import fs from 'fs'
import relatedTerms from "./related.js";
const query = "protocol";
const db = await create({
  schema: {
    author: "string",
    title: "string",
    ISBN: "string",
    publisher: "string",
  },

});

for (const book of database) {
  await insert(db, {
    author: book.author,
    title: book.title,
    ISBN: book.ISBN,
    publisher: book.publisher
  });
}

const find = async (term) => {
  try {
    const searchResult = await search(db, {
      term: term,
      properties: ["author", "title", "ISBN"],
      limit: database.length,
    });
    for (const hit of searchResult.hits) {
      hit.score = hit.score.toFixed(2);
    }
    return searchResult.hits;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const related = async (term) => {
  try {
    let final = [];
    const terms = await relatedTerms(term);
    console.log(terms);
    for (const term of terms) {
      const result = await (await find(term)).map((book) => book.document);
      final.push(result);
    }
    // build a set from final and return it
    return [...new Set(final)];
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

await related(query);
import { readFile, writeFile } from 'fs'; // include the fs module to read and write files

// read the JSON file
readFile('raw_data/json/books.json', (err, data) => {
  if (err) throw err;

  // parse the JSON data
  let json = JSON.parse(data);

  // loop over all the objects in the file
  for (let obj of json) {
    // concatenate the values of the "Year-Of-Publication" and "Publisher" properties
    let newValue =  obj['Publisher']  + ' (' + obj['Year-Of-Publication']+')'

    // remove the "Year-Of-Publication" and "Publisher" properties from the object
    delete obj['Year-Of-Publication'];
    delete obj['Publisher'];

    // add a new property to the object with the concatenated value
    obj['publisher'] = newValue;
  }

  // write the modified JSON data to a new file
  writeFile('raw_data/json/data.json', JSON.stringify(json), (err) => {
    if (err) throw err;
    console.log('Data has been modified and written to a new file');
  });
})
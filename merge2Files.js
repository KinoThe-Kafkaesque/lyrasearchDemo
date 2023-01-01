import { readFile, writeFile } from 'fs'; // include the fs module to read and write files

// read the first JSON file
readFile('raw_data/json/data.json', (err, data) => {
  if (err) throw err;

  // parse the JSON data
  let json1 = JSON.parse(data);

  // read the second JSON file
  readFile('raw_data/json/data2.json', (err, data) => {
    if (err) throw err;

    // parse the JSON data
    let json2 = JSON.parse(data);

    // merge the objects into a single array
    let merged = json1.concat(json2);

    // write the merged array to a new file
    writeFile('raw_data/json/output.json', JSON.stringify(merged), (err) => {
      if (err) throw err;
      console.log('Data has been merged and written to a new file');
    });
  });
});

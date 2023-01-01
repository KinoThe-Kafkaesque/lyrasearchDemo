import { readFile, writeFile } from 'fs'; // include the fs module to read and write files

// read the JSON file
readFile('raw_data/json/final_book_dataset_kaggle.json', (err, data) => {
  if (err) throw err;


  // parse the JSON data
  let json = JSON.parse(data);

  // filter the data to include only the "name" and "age" fields for each item
  let filteredData = json.map(item => ({
    ISBN: item.ISBN,
    title: item.title,
    author: item.author,
    publisher:item.publisher
  }));

  // write the modified JSON data to a new file
  writeFile('raw_data/json/data2.json', JSON.stringify(filteredData), (err) => {
    if (err) throw err;
    console.log('Data has been modified and written to a new file');
  });
})
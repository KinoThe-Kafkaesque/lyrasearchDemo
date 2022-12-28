import csv
import json

# Open the CSV file and read the contents into a list of dictionaries
with open('books.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    data = list(csv_reader)

# Write the data to a JSON file
with open('output.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

import csv
import json
name = 'DataScience_book'
# Open the CSV file and read the contents into a list of dictionaries
with open('./raw data/csv/'+name+'.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    data = list(csv_reader)

# Write the data to a JSON file
with open('./raw data/json/'+name+'.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

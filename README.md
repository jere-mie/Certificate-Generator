# Certificate-Generator
Generates certificates in Google Slides using a Google Sheet for data, powered by Google Apps Script

## To use this script:
1. open the google slide you will be using as your template
2. fill the textbox for the person's name with the text "<<NAME>>" (no quotes)
3. create a Google Sheet with the people's names (make sure the sheet only contains the names, and they are all in the first column)
4. find the ID of the sheet (it can be found in the url like so: https://docs.google.com/spreadsheets/d/ID_WOULD_BE_HERE/edit
5. in the Google Slide, go to Tools -> Script Editor, and copy the code into the editor
6. copy the Google Sheet ID into the appropriate spot in the "var ss" declaration
7. Run the script!

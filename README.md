# Certificate-Generator
Generates certificates in Google Slides using a Google Sheet for data, powered by Google Apps Script

## To use this script:
1. Open the Google Slide you will be using as your template
2. Fill the textbox for the person's name with the text "<\<NAME\>>" (no quotes)
3. Create a Google Sheet with the people's names (make sure the sheet only contains the names, and they are all in the first column)
4. Find the ID of the sheet, it can be found in the url like so: https://docs.google.com/spreadsheets/d/ID_WOULD_BE_HERE/edit
5. In the Google Slide, go to Tools -> Script Editor, and copy the code from **Code.gs** into the editor
6. Copy the Google Sheet ID into the appropriate spot in the "var ss" declaration
7. Run the script!

#### In the future, I plan on releasing this as both a standalone addon for Google Slides, as well as a web app that can be run by anyone from a convenient site.

##### NOTE: Remember to use the code from the Code.gs file

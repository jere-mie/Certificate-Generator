
function onOpen() {
  var hello;
  SlidesApp.getUi().createMenu('Template')
    .addItem('Create Certificate', 'create')
    .addToUi();
  
}
function create() {
  var ui = SlidesApp.getUi();
  var response = ui.prompt('Please enter the ID of the sheet with the data');

  var presentation = SlidesApp.getActivePresentation();
  var ss = SpreadsheetApp.openById(response.getResponseText());
  var sheet = ss.getActiveSheet();
  var vals = sheet.getDataRange().getValues();
  var slides = presentation.getSlides();
  var length = vals.length;
  let i = 0;
  while(i<length){
    slides[0].duplicate();
    i++;
  }
  slides = presentation.getSlides();
  let j = 0;
  while(j<length){
    slides[j+1].replaceAllText('<<NAME>>', vals[j][0]);
    j++;
  }
}

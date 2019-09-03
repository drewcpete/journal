import './styles.css';
import { Entry } from './journal';

$(document).ready(function() {
  $('.journal-entry').submit(function(event) {
    event.preventDefault();
    var journalTitle = $('#journal-title').val();
    var journalBody = $('#journal-body').val();

    var newEntry = new Entry (journalTitle, journalBody);
    console.log(newEntry);

    newEntry.findLetters();
    console.log(newEntry.findletters());
  });
});

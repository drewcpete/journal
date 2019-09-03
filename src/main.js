import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.journal-entry').submit(function(event) {
    event.preventDefault();
    var journalTitle = $('#journal-title').val();
    var journalBody = $('#journal-body').val();


    var newEntry = new Entry (journalTitle, journalBody);
    console.log(newEntry);
    newEntry.vowelCounter();
    $(".result").text("The number of vowels is: " + newEntry.vowelCount);
  });
});

"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/
// Changes the date
var thisDay = new Date("August 30, 2018");
// Edits table HTML
var tableHTML ="<table id ='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
// sets the 14 limited days
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
// loop that grabs all the information and puts it in the table
for(var i = 0; i<eventDates.length; i+=1){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>" + "<td>" + eventDay + "@" + eventTime + "</td>" + "<td>" + eventDescriptions[i] + "</td>" + "<td>" + eventPrices[i] + "</td>" + "</tr>"
   }
}
// closes the table
tableHTML += "</table>";
// displays the table html
document.getElementById("eventList").innerHTML = tableHTML;
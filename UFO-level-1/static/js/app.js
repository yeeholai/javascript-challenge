// from data.js
var tableData = data;

// Select the form
var form = d3.select("form");

// Select the button
var button = d3.select("#filter-btn");

// Get reference to table body
var tbody = d3.select("tbody");

// Create event handlers for clicking the button or pressing enter
button.on("click", runEnter);
form.on("submit", runEnter);

// YOUR CODE HERE!

function runEnter() {
	// clear table 
	tbody.html("");

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value").trim();

	var filteredData = data => data.datetime === inputValue;

	var filteredTable = data.filter(filteredData);

	console.log(filteredTable);

	filteredTable.forEach(function(item){
		
		var row = tbody.append("tr");

		Object.entries(item).forEach(function([key,value]){
			var cell = row.append("td");
			cell.text(value);
		})
	});


}

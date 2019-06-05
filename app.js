// from data.js
var tableData = data;

var tbody = d3.select("tbody")

for (var i = 0; i < tableData.length; i++){

    var row = tbody.append("tr");

    Object.entries(tableData[i]).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        })
}

//Filter data
var button = d3.select("#filter-btn")

button.on("click", function() {
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData)

    tbody.html("");

    for (var i = 0; i < filteredData.length; i++){

        var row = tbody.append("tr");
    
        Object.entries(filteredData[i]).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            })
    }
  });


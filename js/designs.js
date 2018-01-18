const tBody = document.createElement('tbody');
document.getElementById('pixel_canvas').appendChild(tBody);
let colorPicker = document.getElementById('colorPicker');

// Click event listener for submit button
document.getElementsByTagName('input')[2].addEventListener('click', function(evt) {
  evt.preventDefault();

  // Get the table height and width selected by the user
  let tableHeight = document.getElementById('input_height').value;
  let tableWidth = document.getElementById('input_width').value;

  console.log("Submit clicked");

  // Call makeGrid and pass the table height and width as parameters
  makeGrid(tableHeight, tableWidth);
});

// Click event listener for reset button
document.getElementsByTagName('input')[3].addEventListener('click', function(evt) {
  evt.preventDefault();

  // Get the table height and width selected by the user
  document.getElementById('input_height').value = 1;
  document.getElementById('input_width').value = 1;
  colorPicker.value = '#000';
  document.getElementsByTagName('tbody')[0].innerHTML = "";
});

// makeGrid() will construct the table as per the user specifications
function makeGrid(tHeight, tWidth) {
  console.log("inside make grid");

  // Clear any available representations of the table
  document.getElementsByTagName('tbody')[0].innerHTML = "";

  // Create a new grid with tHeight and tWidth
  let constructGrid = function(height, width) {
    let grid = "";

    for (let r = 0; r < height; r++) {
      grid += "<tr>";
      for (let c = 0; c < width; c++) {
        grid += "<td></td>";
      }
      grid += "</tr>";
    }

    return grid;
  }

  // Assign constructed grid to the table
  document.getElementsByTagName('tbody')[0].innerHTML = constructGrid(tHeight, tWidth);
}

// Update the value of the color when the user changes it
document.getElementById('colorPicker').addEventListener('change', function() {
  colorPicker = document.getElementById('colorPicker');
});

// Change the color of the cell selected to the color chosen by the user
document.getElementById('pixel_canvas').addEventListener('click', function(evt) {
  evt.target.style.backgroundColor = colorPicker.value;
}, false);

// Change the color of the cell selected to the color chosen by the user
document.getElementById('pixel_canvas').addEventListener('dblclick', function(evt) {
  evt.target.style.backgroundColor = "";
}, false);

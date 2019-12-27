// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.querySelectorAll('input')[2].setAttribute('id', 'submitButton');// Adds an ID to the submit button

const sizeSellect = document.querySelector("#sizePicker");
const myColor = document.querySelector('#colorPicker');
const button = document.querySelector('#submitButton');
const canvas = document.querySelector('#pixelCanvas');
const hight = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

button.addEventListener('click', function(submit) // Adds an event lestener to the submit button.
{
  submit.preventDefault(); // Prevents the submit buton from reloading the page.
  makeGrid();
});

canvas.addEventListener('mousedown', function()// Adds an event listener to the pixle canvas for click events
{
  if(event.target != canvas)// Makes sure you arnt selecting the border or grid its self.
  {
    event.target.style.backgroundColor = myColor.value;// Sets the color of the clicked cell to the selected color.
  }
});

sizeSellect.addEventListener('input', function()// Adds an event listener to the size inputs.
{
  if (event.target.valueAsNumber > 100)// Clamps the value of the size selector between 1 and 100.
  {event.target.valueAsNumber = 100}

  if (event.target.valueAsNumber < 1)
  {event.target.valueAsNumber = 1}
});


function makeGrid() // Generates pixle canvas.
{
  clearCanvas(canvas);
  canvas.style.borderColor = 'black';// Colors canvas grid black.
  for(let r = 0; r < hight.value; r++)// Generates rows based on the hight value.
  {
    const row = canvas.insertRow();// Incerts row in to grid.
    for(let c = 0; c < width.value; c++)// Generates number of cells per row base on Width value.
    {
      const cell = row.insertCell(c);// Incerts cell in to row.
    }
  }
}

function clearCanvas(table)// Removes privious canvas.
{
  for(let i = 0; i < table.rows.length; i = i)// Loops over and deletes each row.
  {
    table.deleteRow(i);
  }
}

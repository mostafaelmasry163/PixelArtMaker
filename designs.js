document.querySelector("#sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    makeGrid();
}, false);

function makeGrid() {
    // Define user input height and width.
   const inputHeight = document.querySelector("#inputHeight").value;
   const inputWidth = document.querySelector("#inputWidth").value;
    // Define table element.
    const inputTable = document.querySelector("#pixelCanvas");
    //clear
    while (inputTable.hasChildNodes()) {
        inputTable.removeChild(inputTable.lastChild);
    }

    // Loops  to create the table based on input.
    for (let row = 0; row < inputHeight; row++) {
        let tr = document.createElement('tr');
        tr.id = 'row-' + row;
        inputTable.appendChild(tr);
        for (let col = 0; col < inputWidth; col++) {
            let td = document.createElement('td');
            td.id = 'row-' + row + '_cell-' + col;
            inputTable.lastChild.appendChild(td);
        }
    }

    // Create new instances of all table data
    let tableCells = Array.from(document.querySelectorAll("td"));
    // Each cell should have an event listener that sets the background color of the cell to the selected color.
    tableCells.forEach(function (cell) {
        cell.addEventListener("click", function () {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}
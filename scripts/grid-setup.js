const cols = 26;
const rows = 100;

const colHead = document.querySelector(".col-head");
const rowNo = document.querySelector(".row-no");
const cells = document.querySelector(".cells");

let selCell = undefined;

// Loop to set the column titles

for (let i = 0; i < cols; i++) {
  let colTitle = document.createElement("div");
  colTitle.classList.add("cell-wt", "cell", "border");
  colTitle.innerText = String.fromCharCode(65 + i);
  colHead.appendChild(colTitle);
}

// Loop to set the row numbers

for (let i = 0; i < rows; i++) {
  let currRow = document.createElement("div");
  currRow.classList.add("cell-ht", "cell", "border");
  currRow.innerText = i + 1;
  rowNo.appendChild(currRow);
}

// Loop to fill the grid

for (let i = 0; i < rows; i++) {
  let currRow = document.createElement("div");
  currRow.classList.add("excel-row");

  for (let j = 0; j < cols; j++) {
    let currCell = document.createElement("div");
    currCell.classList.add("cell-wt", "act-cell", "border", "excel-cell");
    currCell.setAttribute("contenteditable", "true");
    const cellId = String.fromCharCode(65 + j) + (i + 1);
    currCell.setAttribute("id", cellId);
    currCell.setAttribute("rowIdx", i);
    currCell.setAttribute("colIdx", j);
    currCell.setAttribute("spellcheck", "false");
    currRow.appendChild(currCell);
  }

  cells.appendChild(currRow);
}

// Grid to hold the properties of each cell

let propGrid = [];

for (let i = 0; i < rows; i++) {
  let currRow = [];
  for (let j = 0; j < cols; j++) {
    const newObj = {
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isLeft: false,
      isRight: false,
      isCenter: false,
      fontfam: "monospace",
      fontsize: "16",
    };

    currRow.push(newObj);
  }

  propGrid.push(currRow);
}

// Selecting all the cells

const allCells = $(".excel-cell");

allCells.on("click", handleClick);

// Function to handle selection of any particular cell, and the cell number to be displayed

function handleClick() {
  if (selCell != undefined) {
    selCell.classList.remove("active-cell");
  }

  selCell = this;
  selCell.classList.add("active-cell");
  const currCell = this;
  const id = currCell.getAttribute("id");
  const cellDisplay = document.querySelector(".cell-display");
  cellDisplay.innerText = id;

  handleOptionDisplay(this);
}

// Function to update the active options on selection of any cell

function handleOptionDisplay(cell) {
  const rowidx = cell.getAttribute("rowIdx");
  const colidx = cell.getAttribute("colIdx");

  const propObj = propGrid[rowidx][colidx];

  if (propObj.isBold) {
    bold.addClass("selected-opt");
  } else {
    bold.removeClass("selected-opt");
  }

  if (propObj.isItalic) {
    italic.addClass("selected-opt");
  } else {
    italic.removeClass("selected-opt");
  }

  if (propObj.isUnderline) {
    underline.addClass("selected-opt");
  } else {
    underline.removeClass("selected-opt");
  }

  if (propObj.isLeft) {
    left.addClass("selected-opt");
  } else {
    left.removeClass("selected-opt");
  }

  if (propObj.isRight) {
    right.addClass("selected-opt");
  } else {
    right.removeClass("selected-opt");
  }

  if (propObj.isCenter) {
    center.addClass("selected-opt");
  } else {
    center.removeClass("selected-opt");
  }

  activateFontFam(propObj.fontfam);

  activateFontSize(propObj.fontsize);
}

// Function to update the active font family

function activateFontFam(reqd) {
  const allFonts = $(".font-family-sel option");

  for (let font of allFonts) {
    if ($(font).attr("id") == reqd) {
      font.selected = true;
    } else {
      font.selected = false;
    }
  }
}

// Function to update the active font size
function activateFontSize(reqd) {
  const allSizes = $(".font-size-sel option");
  for (let size of allSizes) {
    if ($(size).attr("id") == reqd) {
      size.selected = true;
    } else {
      $(size).selected = false;
    }
  }
}
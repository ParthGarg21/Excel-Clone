// Here, all the options are given the respected functionalities

// const bold = document.querySelector("#bold");
// const italic = document.querySelector("#italic");
// const underline = document.querySelector("#underline");
// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const center = document.querySelector("#center");

const bold = $("#bold");
const italic = $("#italic");
const underline = $("#underline");
const left = $("#left");
const right = $("#right");
const center = $("#center");

// Selecting all the options

// const allOptions = document.querySelectorAll(".opt-icn");
const allOptions = $(".opt-icn");

// Adding the click event listener

// for (let option of allOptions) {
//   option.addEventListener("click", handleOption);
// }

allOptions.on("click", handleOption);

// Based on the option, we'll set the desired propery of the most recently clicked cell

function handleOption() {
  if (selCell == undefined) {
    return;
  }

  const currOption = this;

  const op = currOption.getAttribute("id");

  const rowidx = selCell.getAttribute("rowIdx");

  const colidx = selCell.getAttribute("colIdx");

  let propObj = propGrid[rowidx][colidx];

  if (op == "bold") {
    bold.toggleClass("selected-opt");
    propObj.isBold = !propObj.isBold;
    selCell.classList.toggle("bold");
  } else if (op == "italic") {
    italic.toggleClass("selected-opt");
    propObj.isItalic = !propObj.isItalic;
    selCell.classList.toggle("italic");
  } else if (op == "underline") {
    underline.toggleClass("selected-opt");
    propObj.isUnderline = !propObj.isUnderline;
    selCell.classList.toggle("underline");
  } else if (op == "left") {
    left.addClass("selected-opt");
    right.removeClass("selected-opt");
    center.removeClass("selected-opt");

    propObj.isLeft = true;
    propObj.isRight = false;
    propObj.isCenter = false;

    selCell.classList.add("left");
    selCell.classList.remove("center");
    selCell.classList.remove("right");
  } else if (op == "center") {
    center.addClass("selected-opt");
    right.removeClass("selected-opt");
    left.removeClass("selected-opt");

    propObj.isLeft = false;
    propObj.isRight = false;
    propObj.isCenter = true;

    selCell.classList.add("center");
    selCell.classList.remove("left");
    selCell.classList.remove("right");
  } else if (op == "right") {
    right.addClass("selected-opt");
    left.removeClass("selected-opt");
    center.removeClass("selected-opt");

    propObj.isLeft = false;
    propObj.isRight = true;
    propObj.isCenter = false;

    selCell.classList.add("right");
    selCell.classList.remove("center");
    selCell.classList.remove("left");
  }
}

// selecing the input:color elements

const colors = $(".color-sel");

// Adding the change event listener which will detect a change in the form value

colors.on("change", handleColor);

// We'll get the value by .value property, then set this as the color

function handleColor() {
  if (selCell == undefined) {
    return;
  }
  const currColor = this;
  const color = currColor.value;

  const id = currColor.getAttribute("id");

  if (id == "bg-col") {
    selCell.style.backgroundColor = color;
  } else {
    selCell.style.color = color;
  }
}

// Seecting the font family select option, then again using the change event listener to detect change in the font family

const fontFamilySel = $(".font-family-sel");

fontFamilySel.on("change", handleFontFam);

function handleFontFam() {
  if (selCell == undefined) {
    return;
  }

  const rowidx = selCell.getAttribute("rowIdx");
  const colidx = selCell.getAttribute("colIdx");

  let propObj = propGrid[rowidx][colidx];

  const fontFam = this.value;
  propObj.fontfam = fontFam;
  selCell.style.fontFamily = fontFam;
}

// selecting the font size selector, then again using the change event listener to change the font size
const fontSizeSel = $(".font-size-sel");

fontSizeSel.on("change", handleFontSize);

function handleFontSize() {
  if (selCell == undefined) {
    return;
  }

  const rowidx = selCell.getAttribute("rowIdx");
  const colidx = selCell.getAttribute("colIdx");

  let propObj = propGrid[rowidx][colidx];
  propObj.fontsize = this.value;

  const fontSize = this.value + "px";

  selCell.style.fontSize = fontSize;
}

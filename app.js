console.log("this is a message for the console");

// Defining Variables
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;
let saleMap;

// function to log information about our viz
function logWorkbookInformation() {
  // get name of workbook
  workbook = viz.workbook;
  console.log(`The workbook name is" ${workbook.name}"`);

  //get array of dashboards within workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  // list all of the worksheets within our active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((apple) => {
    index = apple.index;
    console.log(`The worksheet with index ${index} is ${apple.name}`);
  });
}

const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

// function to filter only for wash and oreg on all sheets
function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);

  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

oregonWashingtonButton.addEventListener("click", oregonWashFunction);

// function to clear filter
function clearStateFilter() {
  console.log(clearFilterButton.value);

  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

clearFilterButton.addEventListener("click", clearStateFilter);

// function to undo
function unDo() {
  console.log(undoButton.value);

  viz.undoAsync();
}

undoButton.addEventListener("click", unDo);

viz.addEventListener("firstinteractive", logWorkbookInformation);

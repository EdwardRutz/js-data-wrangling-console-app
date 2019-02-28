"use strict";

//helper function to generate report from data
function generateReport(data) {
  const columns = Object.keys(data[0]);
  return {
    numRows: data.length,
    numColumns: columns.length,
    columnNames: columns
  };
}

module.exports = generateReport;

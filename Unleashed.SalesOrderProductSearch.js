// ==UserScript==
// @name         Unleashed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modify Unleashed layout
// @author       Outserve
// @match        https://au.unleashedsoftware.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setInterval(function(){

    var container = document.getElementById("simplemodal-container");
    if (container !== null) {
      container.style.width = '98%';
      container.style.left = '1%';
    }
    // document.getElementById("simplemodal-container").style.backgroundColor = 'red';

    show_hide_column('ProductLocalSearch_DXHeaderTable', 3,0);
    show_hide_column('ProductLocalSearch_DXHeaderTable', 4,0);
    show_hide_column('ProductLocalSearch_DXHeaderTable', 5,0);
    show_hide_column('ProductLocalSearch_DXHeaderTable', 6,0);
    show_hide_column('ProductLocalSearch_DXHeaderTable', 7,0);
    show_hide_column('ProductLocalSearch_DXMainTable', 3,0);
    show_hide_column('ProductLocalSearch_DXMainTable', 4,0);
    show_hide_column('ProductLocalSearch_DXMainTable', 5,0);
    show_hide_column('ProductLocalSearch_DXMainTable', 6,0);
    show_hide_column('ProductLocalSearch_DXMainTable', 7,0);

  }, 1000);

  function show_hide_column(table_id, col_no, do_show) {
    var table = document.getElementById(table_id);
    if (table !== null) {
      var rows = table.rows;
      if (rows !== null) {
          for (var row = 0; row < rows.length; row++) {
            var cols = rows[row].cells;
            if (col_no >= 0 && col_no < cols.length && cols[col_no] !== null) {
            cols[col_no].style.display = do_show ? '' : 'none';
          }
        }
      }
    }
  }
})();
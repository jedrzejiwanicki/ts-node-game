"use strict";
exports.__esModule = true;
var Grid_1 = require("./Grid");
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
console.log(context);
new Grid_1.Grid(context);

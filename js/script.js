// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function doMathClicked() {
  document.getElementById("add-area").innerHTML = 
    "<p>The area is " + (3 * 5) + "cm² </p>"
  document.getElementById("add-perimeter").innerHTML = 
    "<p>The perimeter is " + (2 * (3 + 5)) + "cm </p>"
}

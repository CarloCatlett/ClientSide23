
"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Carlo Catlett
      Date: 4/13/2023

      Filename: project09-01b.js
*/

const query = location.search.slice(1);
const modify = query.replace(/\+/g, ' ');
const decode = decodeURIComponent(query);
const cardFields = query.split('&');


for (const item of cardFields) {
      const nameValue = item.split('=');
      const name = nameValue[0];
      const value = nameValue[1];
      const element = document.getElementById(name);
      if (element) {
        element.textContent = value;
      }
    }

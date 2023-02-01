/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Carlo Catlett
      Date: 1/31/2023

      Filename: project02-01.js
 */
    function FarenheitToCelsius(degree)
    {
        document.getElementById("fValue").value;
    
        return (degree-32)/1.8;
    }
    document.getElementById("fValue").onchange = function(){var fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FarenheitToCelsius(fDegree); return fDegree;}
   
   
    function CelsiusToFarenheit(degree)
    {
        document.getElementById("cValue").value;
        
        return degree*1.8+32;
    }
    document.getElementById("cValue").onchange = function(){var cDegree = document.getElementById("cValue").value;
    document.getElementById("fValue").value = CelsiusToFarenheit(cDegree); return cDegree;}

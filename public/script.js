function add(){
var inputElement = document.createElement("input");

// Set the type attribute to "text" for a text input
inputElement.type = "text";

// Set other attributes and properties as needed

inputElement.name = "skill";
inputElement.placeholder = "Skills";

// Select the div with the name "div1" (assuming it has a unique name)
var div1 = document.getElementById("div1")

// Append the input element to the selected div
div1.appendChild(inputElement);
}


function add1(){
    var inputElement = document.createElement("input");

// Set the type attribute to "text" for a text input
inputElement.type = "text";

// Set other attributes and properties as needed

inputElement.name = "lang";
inputElement.placeholder = "Language";

// Select the div with the name "div1" (assuming it has a unique name)
var div1 = document.getElementById("div2")

// Append the input element to the selected div
div1.appendChild(inputElement);

}

function add2(){
    var inputElement = document.createElement("input");
    

    // Set the type attribute to "text" for a text input
    inputElement.type = "text";
    
    // Set other attributes and properties as needed
    
    inputElement.name = "exp";
    inputElement.placeholder = "Company Name";

    var textarea = document.createElement("textarea");

    textarea.name = "exp";
    textarea.placeholder = "About it"
    
    // Select the div with the name "div1" (assuming it has a unique name)
    var inputElement1 = document.createElement("input");
    

    // Set the type attribute to "text" for a text input
    inputElement1.type = "date";
    
    // Set other attributes and properties as needed
    
    inputElement1.name = "exp";
    inputElement1.placeholder = "dob";



    var div1 = document.getElementById("div3")
    
    // Append the input element to the selected div
    div1.appendChild(inputElement);
    div1.appendChild(inputElement1);
    div1.appendChild(textarea);

}


function add3(){
    var inputElement = document.createElement("input");
   

    // Set the type attribute to "text" for a text input
    inputElement.type = "text";
    
    // Set other attributes and properties as needed
    
    inputElement.name = "edu";
    inputElement.placeholder = "Institution Name";


    var textarea = document.createElement("textarea");
    textarea.name = "edu";
    textarea.placeholder = "About it"
    
    // Select the div with the name "div1" (assuming it has a unique name)
    var inputElement1 = document.createElement("input");
   

    // Set the type attribute to "text" for a text input
    inputElement1.type = "date";
    
    // Set other attributes and properties as needed
    
    inputElement1.name = "edu";
    inputElement1.placeholder = "dob";





    var div1 = document.getElementById("div4")
    
    // Append the input element to the selected div
    div1.appendChild(inputElement);
    div1.appendChild(inputElement1);
    div1.appendChild(textarea);

}

const person=[];
const salaries=[];
var merged =[];
var $ = function (id) {
    return document.getElementById(id);
    };

function addSalary(salary){
    salaries.push(salary);
   
}
function displaySalary(){
    merged = [];
    var table = $("results_table");
    for(var i =0; i< person.length; i++){
        merged.push([person[i],salaries[i]]);
   }
    for(var i=1; i<table.rows.length; i++){
        for(var j = 0; j< table.rows[i].cells.length; j++){
            table.rows[i].cells[j].innerHTML = merged[i-1][j];       
       }
    }
        }
function displayResults(){
    var total =0;
    var average=0;
    var biggest = Math.max(...salaries);
    
    for(var i=0; i<salaries.length; i++){
        total=parseInt(total)+ parseInt(salaries[i]);

    }
    average = total / salaries.length;
    $("averageResult").innerHTML = "The Average pay is $" + average + ".";
    $('maxResult').innerHTML = "The highest salary is $"+biggest+".";
}
function validateEntry(){

    var peopleOption = $('people');
    

    var salary = prompt("Please enter a salary for the selected person", 50000);
    salary = parseInt(salary);
    do{
        if(!isNaN(salary)){
            person.push(peopleOption.options[peopleOption.selectedIndex].text);

            addSalary(salary);

            return;
        } else{
            alert("Make sure you input a valid number")
            return;
        }
    } while(isNaN(salary));
    
}
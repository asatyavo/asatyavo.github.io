
function getdaytime(){
    var today = new Date();
    

    

    document.getElementById("dayAndTime").innerHTML = 
    "The date is " + today.toDateString()+ ", and the time is "+today.getHours()+ ":"+today.getMinutes();

}

function askName() {
    var personName = prompt("Enter your full name please!", "Jane Doe");
    var feeling = prompt("Do you like our brand?", "Yes")
    if(personName != null){
        document.getElementById("demo").innerHTML =
    "Hello there " + personName + "! We appreciate you answering "+feeling+" to our question about our brand. Have a lovely day.";
    }
}

function getTotal(){
    var total = prompt("How many mattresses are you buying?", 2);
    total = 200 * parseFloat(total);
    document.getElementById("total").innerHTML = "Your total cost is $"+total;
}

function getTax(){
    var total = prompt("What is your total price for your mattresses without tax?", 5100.00);
    var taxTotal = total * 1.15;
    taxTotal = (Math.round(taxTotal*100)/100).toFixed(2);

    document.getElementById("tax").innerHTML = "Your total with tax is $"+taxTotal;
}

function countPillow(){
    var counta = prompt("How many pillows do you have right now?", 4.00);
    var countb = prompt("How many more pillows do you want to buy?",5.00);
    

    var totalPil = parseFloat(counta)+parseFloat(countb);
    document.getElementById("pillowCount").innerHTML = "You will have "+totalPil+ " mattresses in the future!";
}

function mattressShippingFee(){
    var totalMattress = prompt("Enter how many mattresses you are shipping", 6);

    totalMattress = 15 + parseFloat(totalMattress*1.5);
    document.getElementById("shippingFee").innerHTML = "Your total shipping cost is $"+totalMattress;

}

function getTotalWithShipping(){
    var taxTotal = prompt("Enter your total with tax", 7);
    var shippingFee = prompt("Enter your total shipping cost", 8);

    var everything = parseFloat(taxTotal)+parseFloat(shippingFee);
    document.getElementById("everythingTotal").innerHTML = "Your total for everything together is $"+everything;
}

function getShape(entry){
    switch(entry){
        case 1:
            alert("Your shape is a monogon");
            break;
        case 2:
            alert("Your shape is a bigon");
            break;
        case 3: 
            alert("Your shape is a trigon");
            break;
        case 4: 
            alert("Your shape is a tetragon");
            break;
        case 5:
            alert("Your shape is a pentagon");
            break;
        case 6: 
            alert("Your shape is a hexagon");
            break;
        case 7:
            alert("Your shape is a septagon");
            break;
        case 8: 
            alert("Your shape is a octagon");
            break;
        case 9: 
            alert("Your shape is a nonagon");
            break;
        case 10: 
            alert("Your shape is a decagon");
            break;
    }


}

function validateEntry(){
    

    
    do{
        var sides = prompt("The Sleepy Seahorse requires the number of sides", 6);
        sides = parseInt(sides);
        if(sides>0 && sides <10 ){
            getShape(sides);
            
        } else{
            alert("Provide us with a number (between 1 and 10)");
        }
    } while(sides <=0|| sides>10);
    

}
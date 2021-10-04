
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




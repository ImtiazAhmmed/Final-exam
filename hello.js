function process (){
    console.log("Button Clicked");
    

function disCalculation (age,yearlyFee,internetBill) { 

// var age = 20;
// var yearlyFee=2000;
// var internetBill = 500*12;


if(age>50 && yearlyFee>20000){
    var total= yearlyFee- (internetBill*.20);
    return total;
    // console.log(total);
}
else if(age>30 && yearlyFee>(250*12)){
    var total= yearlyFee- (internetBill*.15);
    return total;
    //console.log(total);
}
else{
    console.log("There will be no incentive")

}
}
let result = disCalculation (age, yearlyFee,internetBill );
document.getElementById("discount").innerText = total;

}
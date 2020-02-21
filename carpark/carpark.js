
// Car Park
// Let’s continue with our car park project.

// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.

// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance.

// creating the parent class cars

class Cars{
    //creating the car  properties
    constructor(name,regNum){
        this._car = name;
        this._regNum = regNum;
        this._hoursParked;// needs to be set with a funtionn call
        this._costPerHour = 1.5;
        /// NOTE:no calculations in properties/constructors
        this._totalCharged;// needs to be set with a function call
    };
    //getters
    get carName(){
        return this._car
    }
    get regNum(){
        return this._regNum
    }
    get hoursParked(){
        return this._hoursParked
    }
    get costPerHour(){
        return this._hoursParked
    };

    get totalCharged(){
        return this._totalCharged;
    }
    
//setters
    set carName(name){
    this._car = name;
}
    set regNum(num){
    his._regNum = num;
}
    set hoursParked(hours){
    this._hoursParked = hours;
    }
    set costPerHour(costPerHour){
        this._costPerHour = costPerHour;
    }
///methods
    // this method calculates the total amount charged
    calTotalCharged(){
    this._totalCharged = this._costPerHour * this._hoursParked;
    }

// response to customer based on input
// you can only call methods withind a method inside a class by representing the object to be instantiated 
// as a parameter in the outer method as i did below
message(hours,object){
    object.hoursParked = hours;
   
    object.calTotalCharged();
    return`
     You have a ${this._car}.
     Registeration number ${this._regNum}. 
     You have stayed at NCP car park for ${this.getHoursParked()} hours. 
     Your bill is £${this.getTotalCharged()}.`
}

}

//create a child class staff 
class Staff extends Cars{
//import the properties and methods of the parent class using super() method
//and add staff class own properties and methods
    constructor(name,regNum,credits){
        super(name,regNum);
        this._staffNum = [101,102,103,104,105,106];
        this._credits = credits;
        this._cashBalance;
        this._discount;
        this._updatedCharge;
    }
//getters  getter have no parameters
    get credits(){
        return this._credits;
    }
   

    get cashBalance(){
        return this._cashBalance;
    }

    get discount(){
        return this._discount;
    }

    get updatedCharge(){
        return this.updatedCharge;
    }

    /// methods
    // No setters because a setter must have a parameter
    calCashBalance(){
        this._cashBalance = this._credits - this._updatedCharge;
    }
    calUpdatedCharge(){
        this._updatedCharge = this._totalCharged - this._discount;

    }
    
    //the checckStaffNum has a parameter so it cannot be a getter hense it is put in methods
    checkStaffNum(id){
        for (let index = 0; index < this._staffNum.length; index++) {
            if (this._staffNum[index] == id) {
                return  id;
            }

        }
        //this RETURN is ouside the for loop so the method does not return is the condition returns false
        return 0;
        
    }

    // this method add a new staff id to the _staffNum property
    addStaffNum(id,){
        this._staffNum.push(id);
    }

    // This method gives a 10% discount to the staffs

    calDiscount(){
        this._discount = this._totalCharged * (10/100) ;
    }
    //  method to display respone based on input
    showStaffBalance(object,staffNum,hours){
            let num = object.checkStaffNum(staffNum)
        if ( num == 0) {
            return `you are not a staff!!!  
            please enter a valid staff id`
        } else {
            object.hoursParked = hours;
   
            object.calTotalCharged();
            object.calDiscount();
            object.calUpdatedCharge()
            object.calCashBalance();
        if (this._credits < this._updatedCharge) {
            return `
            Welcome staff ${num}.
            You have parked for ${this._hoursParked}hrs.
            you have put in £${this._credits}
            you were charged £${this._totalCharged}.
            you recieved a discount of 10% i.e £${this._discount}
            your updated charge is £${this._updatedCharge}
            you have insufficient credit please add more...
            `
        }

            return `
            Welcome staff ${num}.
            You have parked for ${this._hoursParked}hrs.
            you have put in £${this._credits}
            you were charged £${this._totalCharged}.
            you recieved a discount of 10% i.e £${this._discount}
            your updated charge is £${this._updatedCharge}
            Your balance is £${this._cashBalance}.`
        }
       
    }
//try to create a method for those who are not staffs

}

//calling the  Car class 
// let  bentley = new Cars("bentley","liver-007");
// console.log(bentley.message(10,bentley));


// //calling the  Staff class with console
// let  mark = new Staff("mark","liver-007",50);
// console.log(mark.showStaffBalance(mark,101,5));

//testing with html
let name = prompt("please enter your name");
let regNum = prompt("please enter your car registeration number");
let credit = prompt("please enter your credit");
let id = prompt("please enter your staff id");
let hoursParked = prompt("home many hours have you left your car");
name = new Staff(name,regNum,credit);
alert(name.showStaffBalance(name,id,hoursParked));

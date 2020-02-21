class Cars{

    constructor(name,regNum){
        this._car = name;
        this._regNum = regNum;
        this._hoursParked = 5;
        this._costPerHour = 1.5;
        this._totalCharged = this._costPerHour * this._hoursParked;
    };
    
//setters
    setHours(hoursParked){
     this._hoursParked = hoursParked;
    };
    setCostPerHour(costPerHour){
        this._costPerHour = costPerHour;
    };
//getters
    getHours(){
        return this._hoursParked
    };

    getTotalCharged(){
        return this._totalCharged;
    }

    message(){
        return`
         You have a ${this._car}.
         Registeration number ${this._regNum}. 
         You have stayed at NCP car park for ${this.getHours()} hours. 
         Your bill is £${this.getTotalCharged()}.`
    }

}

const volvo = new Cars("aston martin","man123");
// console.log(volvo.getHours());
// console.log(volvo.getTotalCharged());
console.log(volvo.message());
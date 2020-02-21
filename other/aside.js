



 class Cat extends Animal{
    constructor(name,color,age){
        super(name,color,age);
        this._react1 =`lazy and heartless owner`;
        this._react2 =`only drink given`;
        this._react3 =`drink and food given no play time` ;
        this._react4 =`wonderfull!!! owner am blest to have you `;
        this._react5 =`playing and had food but not had a drink`;
        this._react6 =`only playing`;
        this._react7 =`only food given`;
    
    }
//getters for cat class
    getreact1(){
        return this._react1;
    }
    getreact2(){
        return this._react2;
    }
    getreact3(){
        return this._react3;
    }
    getreact4(){
        return this._react4;
    }
    getreact5(){
        return this._react5;
    }
    getreact6(){
        return this._react6;
    }

    getreact7(){
        return this._react7;
    }

//setters for the cat class

    setreact1(bark1){
        this._react1 = bark1;
    }

    setreact2(bark2){
        this._react2 = bark2;
    }
    setreact3(bark3){
        this._react1 = bark3;
    }
    setreact4(bark4){
        this._react4 = bark4;
    }
    setreact5(bark5){
        this._react4 = bark5;
    }
    setreact6(bark6){
        this._react6 = bark6;
    }
    setreact7(bark7){
        this._react7 = bark7;
    }

    
// This function checks the status of the cat using the check method in the Animal class.
// This is done by accepting a parameter that is equal to the instance of the Cat class
// i cant run a method inside a classs so i put the status method of the Animal class in side the checkStatus method
checkStatus(nameofobject){
    if (true) {
    return nameofobject.status(this._react1,this._react2,this._react3,this._react4,this._react5,this._react6,this._react7);

    }

}
}





class Rabbit extends Animal{
    constructor(name,color,age){
        super(name,color,age);
        this._react1 =`lazy and heartless owner`;
        this._react2 =`only drink given`;
        this._react3 =`drink and food given no play time` ;
        this._react4 =`wonderfull!!! owner am blest to have you `;
        this._react5 =`playing and had food but not had a drink`;
        this._react6 =`only playing`;
        this._react7 =`only food given`;
    
    }
//getters for Rabbit class
    getreact1(){
        return this._react1;
    }
    getreact2(){
        return this._react2;
    }
    getreact3(){
        return this._react3;
    }
    getreact4(){
        return this._react4;
    }
    getreact5(){
        return this._react5;
    }
    getreact6(){
        return this._react6;
    }

    getreact7(){
        return this._react7;
    }

//setters for the Rabbit class

    setreact1(bark1){
        this._react1 = bark1;
    }

    setreact2(bark2){
        this._react2 = bark2;
    }
    setreact3(bark3){
        this._react1 = bark3;
    }
    setreact4(bark4){
        this._react4 = bark4;
    }
    setreact5(bark5){
        this._react4 = bark5;
    }
    setreact6(bark6){
        this._react6 = bark6;
    }
    setreact7(bark7){
        this._react7 = bark7;
    }

    
// This function checks the status of the Rabbit using the check method in the Animal class.
// This is done by accepting a parameter that is equal to the instance of the Rabbitclass
// i cant run a method inside a classs so i put the status method of the Animal class in side the checkStatus method
checkStatus(nameofobject){
    if (true) {
    return nameofobject.status(this._react1,this._react2,this._react3,this._react4,this._react5,this._react6,this._react7);

    }

}
}


// Cyber pet time!

// User selects the kind of animal they’d like (dog, cat,
// rabbit) and you have to play with it, feed it, give it
// drinks etc.

// There should be consequences across the board
// – if you don’t play, it gets bored, if you do, it’s happy,
// but gets thirsty, that kind of thing.

    class Animal{
    // create the parent class properties
        constructor(name,color,age){
            this._name = name;
            this._color = color;
            this._age = age;
            this._playTime = false;
            this._feedTime = false;
            this._drinkTime = false;
            this._react1;
            this._react2;
            this._react3;
            this._react4;
            this._react5;
            this._react6;
            this._react7;
        }
        //create getters
        get name(){
            return this._name
        }

        get color(){
            return this._color
        }
        get age(){
            return this._age
        }
// reaction getters
get react1(){
    return this._react1;
}
get react2(){
    return this._react2;
}
get react3(){
    return this._react3;
}
get react4(){
    return this._react4;
}
get react5(){
    return this._react5;
}
get react6(){
    return this._react6;
}

get react7(){
    return this._react7;
}

        // create setters
        set name(name){
            this._name = name;
        }

        set color(color){
             this._color = color;
        }
        set age(age){
             this._age = age;
        }
        /// reaction setters

        set react1(expression){
            this._react1 = expression;
        }

        set react2(expression){
            this._react2 = expression;
        }
        set react3(expression){
            this._react1 = expression;
        }
        set react4(expression){
            this._react4 = expression;
        }
        set react5(expression){
            this._react4 = expression;
        }
        set react6(expression){
            this._react6 = expression;
        }
        set react7(expression){
            this._react7 = expression;
        }


        // creating animal daily activities
        play(){
        this._playTime = true;
        }

        feeding(){
            this._feedTime = true;
        }

        drinking(){
            this._drinkTime = true;
        }

        // method to set reaction values to be used on all instances of Animal

        reactionValues(nameofobject,exp1,exp2,exp3,exp4,exp5,exp6,exp7){
            this._react1 = `${nameofobject.name} says ${exp1}`;
            this._react2 = `${nameofobject.name} says ${exp2}`;
            this._react3 = `${nameofobject.name} says ${exp3}`;
            this._react4 = `${nameofobject.name} says ${exp4}`;
            this._react5 = `${nameofobject.name} says ${exp5}`;
            this._react6 = `${nameofobject.name} says ${exp6}`;
            this._react7 = `${nameofobject.name} says ${exp7}`;
            // try using for loop

        }

        // consequences method
        status(react1,react2,react3,react4,react5,react6,react7){
            //  animal mood responses
            if ((this._playTime == false) && (this._feedTime == false) && (this._drinkTime == false)) {
                // checks if animals had not being played with, feed and given a drink
                return react1;

            } else if ((this._playTime == false) && (this._feedTime == false) && (this._drinkTime == true)) {
                // checks if animals had not being played with, feed but given a drink
                return react2;

            } else if ((this._playTime == false) && (this._feedTime == true) && (this._drinkTime == true)) {
                return react3;
                // checks if animals had not being played with, but feed and given a drink

            } else if ((this._playTime == true) && (this._feedTime == true) && (this._drinkTime == true)) {
                // checks if animals had being played with, feed and given a drink
                return react4;

            } else if ((this._playTime == true) && (this._feedTime == true) && (this._drinkTime == false)) {
                // checks if animals had being played with, feed but not given a drink
                return react5;

            } else if ((this._playTime == true) && (this._feedTime == false) && (this._drinkTime == false)) {
                // checks if animals had being played with, but not feed  and not given a drink
                return react6;

            }else if ((this._playTime == false) && (this._feedTime == true) && (this._drinkTime == false)) {
                // checks if animals had not being played with, not given a drink but had beign feed
                return react7;
            }
                
            
        }   
        

    }

// //testing the animal class
// const dog = new Animal("dog","white",2);
// console.log(dog.age);



// creating classes for dog cat and rabbit



// dog class

    class Dog extends Animal{
        constructor(name,color,age){
            super(name,color,age);
           
        }

    // This function checks the status of the dog using the check method in the Animal class.
    // This is done by accepting a parameter that is equal to the instance of the dog class
    // i cant run a method inside a classs so i put the status method of the Animal class in side the checkStatus method
    checkStatus(nameofobject){
       nameofobject.reactionValues(nameofobject,
        ` lazy and heartless owner`,
        ` only drink given`,
        ` drink and food given no play time`,
        ` wonderfull!!! owner am blest to have you `,
        ` playing and had food but not had a drink`,
        ` only playing`,
        ` only food given`)

        return nameofobject.status(this._react1,this._react2,this._react3,this._react4,this._react5,this._react6,this._react7);

        
    
    }
    }


   

// Cat class

class Cat extends Animal{
    constructor(name,color,age){
        super(name,color,age);
       
    }

// This function checks the status of the dog using the check method in the Animal class.
// This is done by accepting a parameter that is equal to the instance of the dog class
// i cant run a method inside a classs so i put the status method of the Animal class in side the checkStatus method
checkStatus(nameofobject){
   nameofobject.reactionValues(nameofobject,
    ` lazy and heartless owner`,
    ` only drink given`,
    ` drink and food given no play time`,
    ` wonderfull!!! owner am blest to have you `,
    ` playing and had food but not had a drink`,
    ` only playing`,
    ` only food given`)

    return nameofobject.status(this._react1,this._react2,this._react3,this._react4,this._react5,this._react6,this._react7);

    

}
}



// Rabbit class

class Rabbit extends Animal{
    constructor(name,color,age){
        super(name,color,age);
       
    }

// This function checks the status of the dog using the check method in the Animal class.
// This is done by accepting a parameter that is equal to the instance of the dog class
// i cant run a method inside a classs so i put the status method of the Animal class in side the checkStatus method
checkStatus(nameofobject){
   nameofobject.reactionValues(nameofobject,
    ` lazy and heartless owner`,
    ` only drink given`,
    ` drink and food given no play time`,
    ` wonderfull!!! owner am blest to have you `,
    ` playing and had food but not had a drink`,
    ` only playing`,
    ` only food given`)

    return nameofobject.status(this._react1,this._react2,this._react3,this._react4,this._react5,this._react6,this._react7);

    

}
}



// testing Dog class
const jack = new Dog("jack","brown",2);

console.log(jack.checkStatus(jack));
jack.feeding();
console.log(jack.checkStatus(jack));
jack.play();
console.log(jack.checkStatus(jack));
jack.drinking();
console.log(jack.checkStatus(jack),'\n');


// testing Cat class
const lizzy = new Cat("lizzy","gold",3);

console.log(lizzy.checkStatus(lizzy));
lizzy.feeding();
console.log(lizzy.checkStatus(lizzy));
lizzy.play();
console.log(lizzy.checkStatus(lizzy));
lizzy.drinking();
console.log(lizzy.checkStatus(lizzy), '\n' );

// testing Rabbit class
const floffy = new Rabbit("floffy","white-brown",4);

console.log(floffy.checkStatus(floffy));
floffy.feeding();
console.log(floffy.checkStatus(floffy));
floffy.play();
console.log(floffy.checkStatus(floffy));
floffy.drinking();
console.log(floffy.checkStatus(floffy),'\n');

var Bee = function() {
  Grub.call(this); // call the Grub constructor fn so Bee constructor gets all the props from it // whatever is in the grub const fn gets apply to bees const fn
  
  // below modifies the values for bee (props were inherited from grub and after below the values are changed for bee)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype); // set inherit prototype from Grub methods // link it // create a delegation connection
// ^ this destroys the default bee.prototype.constructor
// so we need to recreate it...
Bee.prototype.constructor = Bee; // points prototype to constructor

// call the Grub super calss
// set the prototype
// set the constructor
// an age property that is set to 5
// a color property that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a job property that is set to keep on growing

// when Bee is executed
  // failed lookup in bee will point to Grub
  // constructor will point to Bee constructor func
  // bee constructor define changed values from grub in bee


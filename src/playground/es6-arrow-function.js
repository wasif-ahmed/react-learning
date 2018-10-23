const multiplier ={
    numbers :[5,10,15,20,250],
  multiplyBy     : 2,
    multiply()  {
        return this.numbers.map((single_numbers) => single_numbers* this.multiplyBy ) ;
    }

};
console.log('Multiplier Number.');
console.log(multiplier.multiply());
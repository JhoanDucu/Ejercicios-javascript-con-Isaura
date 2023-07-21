let array = [2, 4, 1, 5, 6, 3];
let sumaMayor = 0;

for (let i = 0; i < array.length - 1; i++) {
    if(array[i]+array[i+1] > sumaMayor){
         sumaMayor = array[i]+array[i+1]
    }

}
console.log('Suma mayor: '+ sumaMayor);
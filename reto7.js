/* 
*
* LO HICE UWU, ERA CON LA FUNCION MATH.MAX
*
*/

let array = [2, 4, 1, 5, 6, 3];
let sumas = [];

for (let i = 0; i < array.length - 1; i++) {
    suma = Math.max(array[i]+array[i+1]);
    sumas.push(suma);
    
}
let sumaMayor = Math.max(...sumas);
console.log(sumaMayor);

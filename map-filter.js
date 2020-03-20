const numbers =[3, 4, 7, 8, 10, 30];
const output = [];
function square(element){
    return element * element;
}
// const result = numbers.map(function(element){
//    return element * element;
    
// })
//console.log(result);

numbers.map(function(element, index, array){
   
    console.log(element, index, array);
})
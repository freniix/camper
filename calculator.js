// let x =1 , y = 1;
// let shouldContinue = true;
// while(shouldContinue){
//   for(y = 1; y<=10; y++){
//     if(((3 * x) + (7 * y) ) % 11 === 0){
//       console.log(`x : ${x} , y: ${y}`);
//       shouldContinue = false;
//       break;
//     }
//   }
//   if(!shouldContinue) break;
//   x++;
// }


// let num = 427398;
// let found = false;
// let i = 1;

// while(!found){
//   if((num - i )% 15 === 0 ){
//     console.log(i);
//     break;
//   }else i++;
// }


let numCount = 0;
for(let i = 190; i<=580; i++){
  if((i % 4 === 0) && (i % 5 === 0) && (i % 6  ===0)) numCount++;
}
console.log(numCount)

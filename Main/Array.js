
//Array method


// //conact()
// let arr=[100,200,300,400,500,600,700,800]
// let arr2=[1100,1200,1300,1400,1500,1600,1700,1800]
// let ss=arr.concat(arr2)
// console.log(ss)

//sort()
//  let arr=[1300,4200,300,400,500,600,700,800]
// arr.sort()
// console.log(arr)    //[
//     1300, 300, 400,
//     4200, 500, 600,
//      700, 800
//   ]  give u output like this first cherecter kohi sort karta hai

//after use of function()
// let compare=(a, b)=>{
// return a-b 
// }

// let arr=[1300,4200,300,400,500,600,700,800]
// arr.sort(compare)
//console.log(arr)

// //splice and slice
//  let arr=[100,200,300,400,500,600,700,800]
// // arr.splice(2,3,1000,2000,3000,)    // means index 2 pasun start karo and 3 value delete karo, and 1000,2000,3000 add karo
// // console.log(arr)      

// let a=arr.slice(2)
// console.log(a)   // [ 300, 400, 500, 600, 700, 800 ]

//unshift()
//add a new value in first position
//let arr=[100,200,300,400,500,600,700,800]
// arr.unshift("1200")
// console.log(arr)



//to string
// let b=arr.toString();
//console.log(b)

//join()
// let a=arr.join("_")
// console.log(a)

//pop()
// // remove your last element and give a new array to u
// arr.pop()
// console.log(arr)

//push()
// add a new value last in a array
// arr.push('1500')
// console.log(arr)

//shift()
// //remove first element in array
// arr.shift();
// console.log(arr)

//Array from
//kisi string se array banta hai
//let a="sachin"
// let b=Array.from(a)
// console.log(b)

// use for of loop
// for(let i of a){                   //use for perform any action on same array
//     console.log(i)
// }
// for(let i in a){
//     console.log(a[i])
// }


//same format use in map()      it is give you a new array
// let a=[100,20,300,400]

// let b=a.map((value)=>{
//     console.log( value)         //it is give you a new array
//     return value +1
// })
// console.log(b)



// user filter()
// let a = [100, 20, 2,10,300, 400]
// let b = a.filter((value) => {
//     return value < 50                 //it is give you a new array
// })
// console.log(b)



// user reduse()
        // let a = [1, 2, 20,10,3, 4]
                                            // addig a two number and give u a new array
// let b=a.reduce((value , value2)=>{
//     return value+value2;
// })
// console.log(b)


//Q1===take one array and find sqaure of this

// let arr=[10,20,30,40]

// arr.forEach((element)=>{                      //use for perform any action on same array
//     console.log(element* element)
// })

// Q2 == tak a number from user and add in array

// let a=prompt("give me a number")
// let b=Number.parseInt(a);
// console.log(typeof a)
// let arr=[100,200,300,400]
// console.log(arr)
//  arr.push(b);
// console.log(arr)

// Q3 == tab tak  number  add karo jb tk 0 nhi aa jta
// let arr=[100,200,300,400]
// let a;
// do{
//       a=prompt("give me a number")
//     let b=Number.parseInt(a);
    
//      arr.push(b);
    
// }while(a!=0)
// console.log(arr)
 
// Q4 ==  array me 10 se divide hone wale print karo
// let arr=[11,25,300,400]

// let b=arr.filter((value)=>{
//     return value%10== 0
// })
// console.log(b)
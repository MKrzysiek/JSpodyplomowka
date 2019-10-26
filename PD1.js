// /* ZADANIE 1.
// 1)	From years in array check for leap years [1974, 1900, 1985, 2000] */

// let tab = [1974, 1900, 1985, 2000];

// for (i = 0; i < tab.length; i++)

// if  (tab[i] %400 == 0 || tab[i] %4 == 0 && tab[i] %100 != 0 ) {

//     console.log("Rok ", tab[i], " jest rokiem przestępnym");

// } else {
//     console.log("Rok ", tab[i], " nie jest rokiem przestępnym");
// }


// /* ZADANIE 2.
// // 2)	Calculate factorial of 7. */

// // let a = 7;  /* silnia podanej liczby*/
// // let b = 1

// // while( a > 0 ){
// //     b *= a--;
// //     }
// // console.log(b);

// /* ZADANIE 3 
// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98] */


// let tab = [1,6,23,8,4,98,3,7,3,98,4,98]
// let sum = 0;

// for(i=0; i<tab.length; i++)
// {
//     if(tab[i] %2 != 0)
//     {
//         sum += tab[i];
//     }
// }
// console.log("Suma wartości nieparzystych wynosi : ", sum);


// /* ZADANIE 4 
// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run. */

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98]
// let max = tab[0];
// let min = tab[0];


// for(i=1; i<tab.length; i++)
// {
//     if(max<tab[i])
//         {
//             max = tab[i];
//         }
//     if(min>tab[i])
//         {
//             min = tab[i];    
//         }   
        
// }
// console.log("Wartość maksymalna wynosi : ", max);
// console.log("Wartość minimalna wynosi : ", min);



// /* ZADANIE 5
// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].  */

// let tab = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let longest = tab[0];

// for( i=1; i<tab.length; i++)
// {
//     if(longest.length < tab[i].length)
//     {
//         longest = tab[i];
//     } 

// }
// console.log("Najdłuższy wyraz w tablicy to " , longest);
// console.log("Ilość znaków : ", longest.length);

// /* ZADANIE 6
// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].  */

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let max = 0;
// let index_tab=[]
// for(i=0; i<tab.length; i++) 
// {
    
//     if(max >= tab[i])
//     {
//         if(max==tab[i]) 
//         {
//             index_tab.push(i);
//         }
        
//     }   
//     else 
//     {
//         max = tab[i]
//         index_tab=[];
//         index_tab.push(i);
        
//     }  

// }
// console.log('Największa znaleziona wartość to : ', max);
// console.log('W tablicy znajduje się pod indeksami: ', index.tab);



/* ZADANIE 7 
7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98] */

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let sum = 0;
// let number = 0;


// for( i = 0; i<len; i++)
// {
//     if(tab[i] % 2 == 0 )
//     {
//         sum +=tab[i];
//         number +=1;
//     }

// }

// console.log("Wartość Średnia dla podanych liczb parzystych wynosi ", sum/number);


/* ZADANIE 8 
8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]. */

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let sum = 0;
// let number = 0;


// for( i = 2; i<len; i+=2)
// {
//         sum +=tab[i];
//         number +=1;
    

// }

// console.log("Wartość średnia pozycji przy parzystych indeksach wynosi ", sum/number);


/* ZADANIE 9
9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]. */

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let len = tab.length;

// for(i=0; i<len; i++)
// {
//     if(tab[i] %2 == 0)
//     {
//         sum+=tab[i];
//     }
//     else
//     {
//         sum-=tab[i];
//     }

// }
// console.log("Wartość przeliczonych według założeń składników wynosi : ", sum);
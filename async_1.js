//using promise only
// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// // Simulating a promise-based asynchronous operation
// const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('ticket'), 3000);
// });

// // Simulating promise-based operations to get items
// const getPopcorn = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('popcorn'), 3000);
// });

// const getCandy = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('candy'), 3000);
// });

// const getCoke = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('coke'), 3000);
// });

// const getColdDrinks = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('coldDrink'), 3000);
// });

// // Handling the promises
// person3PromiseToShowTicketWhenWifeArrives
//   .then((ticket) => {
//     return Promise.all([getPopcorn, getCandy, getCoke, getColdDrinks]).then(
//       ([popcorn, candy, coke, coldDrink]) => {
//         console.log(`got ${popcorn}, ${candy}, ${coke}, ${coldDrink}`);
//         return ticket;
//       }
//     );
//   })
//   .then((t) => console.log(`person4 shows ${t}`))
//   .catch((error) => console.error('Error:', error));

// console.log('person5 shows ticket');



// // using aysnc/await:-
// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// // Simulating a promise-based asynchronous operation
// const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('ticket'), 3000);
// });

// // Simulating promise-based operations to get items
// const getPopcorn = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('popcorn'), 3000);
// });

// const getCandy = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('candy'), 3000);
// });

// const getCoke = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('coke'), 3000);
// });

// const getColdDrinks = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('coldDrink'), 3000);
// });

// Async function using await
// const preMovieAsync = async () => {
//   try {
//     const ticket = await person3PromiseToShowTicketWhenWifeArrives;
//     const [popcorn, candy, coke, coldDrink] = await Promise.all([
//       getPopcorn,
//       getCandy,
//       getCoke,
//       getColdDrinks,
//     ]);
//     console.log(`got ${popcorn}, ${candy}, ${coke}, ${coldDrink}`);
//     return ticket;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

// // Function handling the async/await call
// const handlePreMovie = async () => {
//   try {
//     const t = await preMovieAsync();
//     console.log(`person4 shows ${t}`);
//   } catch (error) {
//     console.error('Error in preMovieAsync:', error);
//   }
// };

// // Calling the function that uses async/await
// handlePreMovie();

// console.log('person4 shows ticket');




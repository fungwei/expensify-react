//Object Destructuring

// const person = {
//   age: 29,
//   location: {
//     city: 'Kuala Lumpur',
//     temp: 35
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperatue } = person.location;
// if (city && temperatue) {
//   console.log(`It's ${temperatue} in ${city}`);
// }

// const book = {
//   title: 'World War Z',
//   author: 'Max Brooks',
//   publisher: {
//     name: 'penguin'
//   }
// };

// const {name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName);


//
//Array Destucturing
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvanie', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}`)
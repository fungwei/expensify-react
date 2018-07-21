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

const book = {
  title: 'World War Z',
  author: 'Max Brooks',
  publisher: {
    name: 'penguin'
  }
};

const {name: publisherName = 'Self Published'} = book.publisher

console.log(publisherName);
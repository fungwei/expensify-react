const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`


test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return correct greeting', () => {
  const result = generateGreeting('Fung');
  expect(result).toBe('Hello Fung!');
});

test('should return correct greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});

export const removeItemAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

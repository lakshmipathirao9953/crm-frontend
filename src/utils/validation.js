// const shortText = (str) => {
//   return str.length >= 3 && str.length <= 100;
// };

// export default shortText;
//It appears that the error is occurring in the shortText function, and specifically,
//  To prevent the error you're encountering, you should add a check to ensure that
//str is defined before attempting to access its length property. Here's an updated version of the shortText function:
const shortText = (str) => {
  return str && str.length >= 3 && str.length <= 100;
};
export default shortText;

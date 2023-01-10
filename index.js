// Code your solution here
const findMatching = (nameArray, input) => {
  return nameArray.filter((name) => name.toUpperCase() === input.toUpperCase());
};

const fuzzyMatch = (nameArray, input) => {
  if (nameArray.filter((name) => name.startsWith(input))) {
    return nameArray.filter((name) => name.startsWith(input));
  } else {
    return [];
  }
};

const matchName = (objArray, input) => {
  return objArray.filter(
    (obj) => obj.name.toUpperCase() === input.toUpperCase()
  );
};

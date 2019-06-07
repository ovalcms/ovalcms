module.exports = function removeSpacesFromString(string) {
  if (typeof string !== "string") throw new TypeError("Must be a string!");
  return string.replace(/\s/g, "");
};

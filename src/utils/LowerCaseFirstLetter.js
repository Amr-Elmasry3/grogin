export function LowerCaseFirstLetter(str) {
  if (!str) return str;

  return str[0].toLowerCase() + str.slice(1);
}

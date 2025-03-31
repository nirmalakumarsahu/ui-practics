export function useChangeCase(str) {
  var firstChar = str.charAt(0);
  var restChar = str.substring(1);
  return firstChar.toUpperCase() + restChar.toLowerCase();
}

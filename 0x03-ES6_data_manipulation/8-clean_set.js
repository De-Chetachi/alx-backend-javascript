export default function cleanSet(set, startString) {
  let string = '';

  set.forEach((element) => {
    if (typeof startString !== "string" || typeof  element !== "string")
    {
      return string;
    }
    if (element.startsWith(startString) && startString !== '') {
      // console.log(`${element}  ${string}`);
      string += element.replace(startString, '-');
    }
  });
  if (string.startsWith('-')) {
    string = string.replace('-', '');
  }
  return string;
}

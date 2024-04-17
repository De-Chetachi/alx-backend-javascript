export default function cleanSet(set, startString) {
  let string = '';
  set.forEach((element) => {
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

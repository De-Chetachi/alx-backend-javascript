export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length)
  //new DataView(buffer).setInt8(position, value,);
  const view = new Int8Array(buffer);
  try {
    //return new DataView(buffer).setInt8(position, value);
    view[position] = value;
    return buffer;
  } catch (error) {
    throw new Error('Position outside range');
  }
}

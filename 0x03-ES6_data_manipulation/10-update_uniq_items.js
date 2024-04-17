export default function updateUniqueItems(map) {
  try {
    for (const [grocery, value] of map) {
      if (value === 1) {
        map.set(grocery, 100);
      }
    }
  } catch (e) {
    throw new Error('Cannot process');
  }
}

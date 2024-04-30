export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    const keys = Array.from(map.keys());
    for (const k of keys) {
      if (map.get(k) === 1) map.set(k, 100);
    }
  } else {
    throw new Error('Cannot process');
  }
}

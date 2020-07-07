// export const findMinPrice = (priceObject) => Math.min(...Object.keys(priceObject).map(el => (priceObject[el])).filter(el => el !== null));

// let's make it readable
export function findMinPrice(priceObject) {
  const nums = Object.keys(priceObject).map(el => (priceObject[el])).filter(el => el !== null)
  return nums.length ? Math.min(...nums) : 0;
} 
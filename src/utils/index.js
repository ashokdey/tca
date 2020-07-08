import axios from 'axios';

// export const findMinPrice = (priceObject) => Math.min(...Object.keys(priceObject).map(el => (priceObject[el])).filter(el => el !== null));

// let's make it readable
export const findMinPrice = (priceObject) => {
  const nums = Object.keys(priceObject).map(el => (priceObject[el])).filter(el => el !== null)
  return nums.length ? Math.min(...nums) : 0;
}

export const resolveAPICalls = (urls = []) => new Promise((resolve, reject) => {
  if (!Array.isArray(urls)) throw new Error('Invalid arguments');

  // since we have get apis only
  const APICalls = urls.map(url => axios.get(url));

  // get the data of the APIs
  Promise.all(APICalls).then(result => {
    const [priceData, hotelData] = result;
    const prices = priceData.data.data;
    const hotels = hotelData.data.data;

    if (Array.isArray(prices) && Array.isArray(hotels)) {
      // Let's use hash map and then create a single hotel object
      // This has complexity of O(n) if data goes to N
      const store = {};

      hotels.map(hotel => {
        if (!store[hotel.id]) {
          store[hotel.id] = hotel;
        }
      });

      prices.map(price => {
        if (store[price.id]) {
          store[price.id].price = price.price;
        }
      });

      // convert the store into array of hotels
      const final = Object.keys(store).map((k) => store[k])
      resolve(final);
    }
  });
});
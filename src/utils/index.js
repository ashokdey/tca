import axios from 'axios';

// find the min from the price object which cal also have nulls
/**
 po = {
    acacia: 2200
    mahogany: 3312
    maple: null
    oak: 2435
   } ;
 */
export const findMinPrice = (priceObject) => {
  // const nums = Object.keys(priceObject).map(el => (priceObject[el])).filter(el => el !== null)
  // return nums.length ? Math.min(...nums) : 0;
  const priceList = [];

  Object.keys(priceObject).forEach(el => {
    const num = priceObject[el];
    if (num) priceList.push(num);
  });
  return priceList.length ? Math.min(...priceList) : 0;
}

export const resolveAPICalls = (urls = []) => new Promise((resolve, reject) => {
  if (!Array.isArray(urls)) throw new Error('Invalid arguments');
  // since we have get apis only
  const APICalls = urls.map(url => axios.get(url));
  // get the data of the APIs
  Promise.all(APICalls).then(result => resolve(result));
});

// This will be used for combining the result from 2 APIs
export const createHotelObjectArrays = (response) => {
  const [priceData, hotelData] = response;
  const prices = priceData.data.data;
  const hotels = hotelData.data.data;
  // this is hard coded, what 
  if (!Array.isArray(prices) && !Array.isArray(hotels)) {
    return [];
  }
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
  return final;
}
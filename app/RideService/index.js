const cacheData = require('./data.json');

const RideService = {
  rides: null,
  fetch() {
    return new Promise((resolve) => {
      if (this.rides) return resolve(this.rides);
      return fetch('http://localhost:3001/')
        .then(res => resolve(res.json()))
        .then((rides) => {
          this.rides = rides;
        })
        .catch(() => {
          this.rides = cacheData;
          resolve(this.rides);
        });
    });
  },
};

module.exports = RideService;
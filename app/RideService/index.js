const RideService = {
  rides: null,
  fetch() {
    return new Promise((resolve, reject) => {
      if (this.rides) return resolve(this.rides);
      fetch('http://localhost:3001/')
        .then(res => resolve(res.json()))
        .then(rides => this.rides = rides)
        .catch(reject);
    });
  }
};

module.exports = RideService;
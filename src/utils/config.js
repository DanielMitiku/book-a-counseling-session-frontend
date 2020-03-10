const prod = {
  url: {
    BASE_URL: 'https://infinite-headland-46247.herokuapp.com',
  },
};

const dev = {
  url: {
    BASE_URL: 'http://localhost:4000',
  },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

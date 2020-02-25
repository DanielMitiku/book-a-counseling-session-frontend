const prod = {
  url: {
   BASE_URL: ‘https://something.herokuapp.com',
   },
 };

 const dev = {
  url: {
   BASE_URL: ‘http://localhost:3000',
  },
 };
 
 export default config = process.env.NODE_ENV === ‘development’ ? dev : prod;
// index.js
// ============================ DB ACCESS =============================== //
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});





// ============================= EXPORTS ================================ //
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
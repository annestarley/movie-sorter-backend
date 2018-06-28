'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie-sorter'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};

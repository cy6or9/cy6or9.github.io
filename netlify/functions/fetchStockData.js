// netlify/functions/fetchStockData.js
const axios = require('axios');

exports.handler = async (event, context) => {
    const { symbol } = event.queryStringParameters;
    const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
    const FINNHUB_URL = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;

    try {
          const response = await axios.get(FINNHUB_URL);
          return {
                  statusCode: 200,
                  body: JSON.stringify(response.data),
          };
    } catch (error) {
          return {
                  statusCode: 500,
                  body: JSON.stringify({ error: 'Failed to fetch data' }),
          };
    }
};

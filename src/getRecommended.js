
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const response = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10");
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

exports.handler = async function (event, context) {
  const apiUrl = `https://api.moysklad.ru/api/remap/1.2/report/stock/all/current`;
  const username = "admin@dessert1";
  const password = "7212565689";

  const credentials = Buffer.from(`${username}:${password}`, "utf-8").toString(
    "base64"
  );

  const headers = {
    Authorization: `Basic ${credentials}`,
    "Accept-Encoding": "gzip",
  };
  try {
    const response = await fetch(apiUrl, { headers });
    if (!response.ok) {
      return response.status;
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return console.log(error);
  }
};

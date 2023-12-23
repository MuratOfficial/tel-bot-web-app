const axios = require("axios");

app.get("/api/products", async (req, res) => {
  try {
    const apiUrl = "https://api.moysklad.ru/api/remap/1.2/entity/product";
    const username = "admin@dessert1";
    const password = "7212565689";

    const credentials = Buffer.from(
      `${username}:${password}`,
      "utf-8"
    ).toString("base64");

    const headers = {
      Authorization: `Basic ${credentials}`,
      // Remove "Accept-Encoding": "gzip" - let the browser handle compression
    };

    const response = await axios.get(apiUrl, { headers });
    res.json(response.data);
  } catch (error) {
    console.error("Error in proxy request:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

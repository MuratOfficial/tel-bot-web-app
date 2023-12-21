const apiUrl = "https://api.moysklad.ru/api/remap/1.2/security/token";
const username = "admin@dessert1";
const password = "7212565689";

const getProductsList = async () => {
  const headers = new Headers({
    Authorization: "Basic " + btoa(username + ":" + password),
    "Accept-Encoding": "gzip",
  });

  const productsList = await fetch(apiUrl, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("There was a problem with the fetch operation:", error);
    });

  return productsList;
};

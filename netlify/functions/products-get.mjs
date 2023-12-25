export default async function () {
  const apiUrl =
    "https://api.moysklad.ru/api/remap/1.2/entity/product?filter=pathName=Пироги&filter=pathName=Пирожные&filter=pathName=Торты&filter=pathName=Чизкейки&filter=pathName=Премиум&filter=pathName=AIRBA FRESH";
  const username = "admin@dessert1";
  const password = "7212565689";

  const credentials = Buffer.from(`${username}:${password}`, "utf-8").toString(
    "base64"
  );

  const headers = {
    Authorization: `Basic ${credentials}`,
    // Remove "Accept-Encoding": "gzip" - let the browser handle compression
  };

  const response = await fetch(apiUrl, { headers });
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    status: response.status,
  });
}

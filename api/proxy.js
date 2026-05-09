export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const params = new URLSearchParams(req.query).toString();
  const url = `https://script.google.com/macros/s/AKfycbxbHOYabu1oEox8RtdDDT0oHbsT5nto43IlNr3Yae_CkdtQYiG5Vl9Qm6b4T9jxRHmsaw/exec?${params}`;
  const response = await fetch(url, { redirect: "follow" });
  const text = await response.text();
  res.setHeader("Content-Type", "application/json");
  res.send(text);
}

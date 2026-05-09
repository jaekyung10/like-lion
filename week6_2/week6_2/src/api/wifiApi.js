const SERVICE_KEY = "6227cdbae4a4e122076c3f9ed8e3b5c955c6650be7271d01956b643d8a3bd4ac";

export const getWifiList = async () => {
  const url = `https://apis.data.go.kr/1741000/free_wifi_info/info?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=100&type=json`;

  const response = await fetch(url);

  const text = await response.text();
  console.log("API 원본 응답:", text);

  const data = JSON.parse(text);
  console.log("API 변환 응답:", data);

  return data;
};
export default function parseQuery(searchTerm) {
  const validKeys = ["name", "cat", "min", "max"];
  let bufferQuery = searchTerm.trim().split(";");

  const processedQuery = {};

  if (
    bufferQuery.length === 1 &&
    bufferQuery[0] &&
    !bufferQuery[0].includes(":")
  ) {
    processedQuery["name"] = bufferQuery[0].trim();
  } else {
    bufferQuery.forEach((term) => {
      let [key, value] = term.split(":");

      key = key.trim();
      if (
        value &&
        validKeys.includes(key) &&
        !processedQuery.hasOwnProperty(key)
      ) {
        processedQuery[key] = value.trim();
      }
    });
  }

  return new URLSearchParams(processedQuery).toString();
}

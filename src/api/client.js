export async function client(endpoint, method, body) {
  //wraper sobre fetch para realizar chamadas à API.

  const baseUrl = "http://159.89.178.109:8080"; //normalmente este valor seria definido usando um .env, mas foi hardcoded para facilitar a inicialização do app pelo avaliador
  const headers = { "Content-Type": "application/json" };
  const mode = "cors";

  const config = {
    method,
    headers,
    mode,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(baseUrl + endpoint, config);

  const data = await response.json();
  return data;
}

client.get = async function (endpoint) {
  return client(endpoint, "GET");
};

client.post = async function (endpoint, body) {
  return client(endpoint, "POST", body);
};

client.put = async function (endpoint, body) {
  return client(endpoint, "PUT", body);
};

client.delete = async function (endpoint, body) {
  return client(endpoint, "DELETE", body);
};

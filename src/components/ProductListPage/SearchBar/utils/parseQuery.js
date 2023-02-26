export default function parseQuery(searchTerm) {
  //função para processamento dos critérios de busca

  //definição das chaves de busca aceitas
  const validKeys = ["name", "cat", "min", "max"];
  //divisão da string base quando foram utilizados múltiplos critérios de busca
  let bufferQuery = searchTerm.trim().split(";");

  const processedQuery = {};

  if (
    bufferQuery.length === 1 &&
    bufferQuery[0] &&
    !bufferQuery[0].includes(":")
  ) {
    //Caso o usuário utilize apenas um critério de busca, sem definição explícita da chave, o sistema assume que a busca será realizada por nome
    processedQuery["name"] = bufferQuery[0].trim();
  } else {
    bufferQuery.forEach((term) => {
      //sistema percorre todos os termos de busca, separando chaves e valores
      let [key, value] = term.split(":");

      key = key.trim();
      if (
        value &&
        validKeys.includes(key) &&
        !processedQuery.hasOwnProperty(key)
      ) {
        /*
          - Se uma chave é informada sem valor, ela é desconsiderada
          - Se é informada uma chave inválida, ela é desconsiderada
          - Se a mesma chave é informada mais de uma vez, apenas o primeiro valor é utilizado. Os demais são descartados.
        */
        processedQuery[key] = value.trim();
      }
    });
  }

  //conversão dos pares de chave/valor válidos em uma string no formato de query
  return new URLSearchParams(processedQuery).toString();
}

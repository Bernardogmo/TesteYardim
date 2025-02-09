// Converte um array de objetos JSON para uma string CSV.
export default function convertJson2Csv(jsonData: any[]): string {
    // Verifica se o array está vazio ou indefinido. 
    if (!jsonData || jsonData.length === 0) {
      return "";
    }
    // Obtém as chaves do primeiro objeto do array.
    const headers = Object.keys(jsonData[0]);
    
    // Mapeia cada objeto do array para uma linha do CSV.
    const rows = jsonData.map(obj =>
      // Para cada objeto, mapeia os valores das chaves, convertendo-os para string e tratando valores nulos/indefinidos.
      headers.map(header => JSON.stringify(obj[header] ?? "")).join(",")
    );
    // Retorna a string CSV final.
    return [headers.join(","), ...rows].join("\n");
  }
  
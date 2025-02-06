export default function convertJson2Csv(jsonData: any[]): string {
    if (!jsonData || jsonData.length === 0) {
      return "";
    }
  
    const headers = Object.keys(jsonData[0]);
    
    const rows = jsonData.map(obj =>
      headers.map(header => JSON.stringify(obj[header] ?? "")).join(",")
    );
  
    return [headers.join(","), ...rows].join("\n");
  }
  
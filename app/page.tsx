"use client"; 

// Importações de componentes e utilitários
import JsonInput from "@/components/JsonImput";
import ConvertButton from "@/components/ConvertButton"; 
import convertJson2Csv from "@/utils/convertJson2Csv"; 
import CsvOutput from "@/components/CsvOutput"; 
import DownloadCsv from "@/components/DownloadCsv"; 
import { useState } from "react"; 

// Componente principal da página
export default function Home() {
  // Estados para armazenar o JSON, o conteúdo CSV e mensagens de erro
  const [jsonText, setJsonText] = useState(""); 
  const [csvOutput, setCsvOutput] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  // Função para lidar com a conversão de JSON para CSV
  const handleConvert = () => {
    setErrorMessage(""); // Limpa a mensagem de erro 

    // Verifica se o campo json está vazio
    if (!jsonText.trim()) {
      setErrorMessage("A caixa de texto está vazia!"); 
      return; 
    }

    try {
      const jsonData = JSON.parse(jsonText); // Tenta converter o json em um objeto JavaScript
      const csvData = convertJson2Csv(jsonData); // Converte o objeto JSON em CSV 
      setCsvOutput(csvData); // Atualiza o estado 
    } catch (error) {
      
      setErrorMessage("O JSON fornecido é inválido!");// Erro na conversão do json
    }
  };

  // Função para limpar os campos e mensagens de erro
  const handleClear = () => {
    setJsonText(""); 
    setCsvOutput(""); 
    setErrorMessage(""); 
  };

  // Renderização do componente
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Componente de entrada de texto JSON */}
      <JsonInput value={jsonText} onChange={setJsonText} />
      
      {/* Componente de botão para converter e limpar */}
      <ConvertButton onConvert={handleConvert} onClear={handleClear} />
      
      {/* Exibe uma mensagem de erro, se houver */}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>} 
      
      {/* Exibe o conteúdo CSV gerado, se houver */}
      {csvOutput && <CsvOutput csvContent={csvOutput} />}
      
      {/* Componente para baixar o arquivo CSV, se houver conteúdo CSV */}
      {csvOutput && <DownloadCsv csvData={csvOutput} filename="dados.csv" />}
    </div>
  );
}
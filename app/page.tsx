"use client";

import JsonInput from "@/components/JsonImput";
import ConvertButton from "@/components/ConvertButton";
import convertJson2Csv from "@/utils/convertJson2Csv";
import CsvOutput from "@/components/CsvOutput";
import DownloadCsv from "@/components/DownloadCsv";
import { useState } from "react";


export default function Home() {
  const [jsonText, setJsonText] = useState("");
  const [csvOutput, setCsvOutput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleConvert = () => {
    setErrorMessage(""); // Limpa a mensagem de erro a cada tentativa de conversão

    if (!jsonText.trim()) {
      setErrorMessage("A caixa de texto está vazia!"); // Caso o campo esteja vazio
      return;
    }

    try {
      const jsonData = JSON.parse(jsonText);
      const csvData = convertJson2Csv(jsonData);
      setCsvOutput(csvData);
    } catch (error) {
      setErrorMessage("O JSON fornecido é inválido!");
    }
  };

  const handleClear = () => {
    setJsonText(""); 
    setCsvOutput(""); 
    setErrorMessage(""); 
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <JsonInput value={jsonText} onChange={setJsonText} />
      <ConvertButton onConvert={handleConvert} onClear={handleClear}/>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {csvOutput && <CsvOutput csvContent={csvOutput} />}
      {csvOutput && <DownloadCsv csvData={csvOutput} filename="dados.csv" />}
    </div>
  );
}


import React from "react";

// Define uma interface para as propriedades do componente CsvOutput
interface CsvOutputProps {
  csvContent: string;  
}

// Componente funcional CsvOutput 
const CsvOutput: React.FC<CsvOutputProps> = ({ csvContent }) => {
  return (
    <textarea
      value={csvContent}
      readOnly
      className="w-full h-40 p-2 border rounded-lg bg-gray-100 text-black"
      placeholder="CSV gerado aparecerá aqui"
    />
  );
};

export default CsvOutput;
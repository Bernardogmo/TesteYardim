import React from 'react';

interface DownloadCsvProps {
  csvData: string;
  filename: string;
}

export default function DownloadCsv({ csvData, filename }: DownloadCsvProps) {
  // Função para criar um link de download
  const createDownloadLink = () => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    return url;
  };

  return (
    <div>
      <a
        href={createDownloadLink()}
        download={filename}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Baixar CSV
      </a>
    </div>
  );
}
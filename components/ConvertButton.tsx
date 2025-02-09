// Define uma interface para as propriedades do componente ConvertButton
interface ConvertButtonProps {
    onConvert: () => void; // Função que será chamada ao clicar no botão "Converter"
    onClear: () => void;   // Função que será chamada ao clicar no botão "Limpar"
}

// Componente ConvertButton que recebe as propriedades definidas na interface
export default function ConvertButton({ onConvert, onClear }: ConvertButtonProps) {
    return (
        <div className="flex gap-2">
            {/* Botão "Converter" */}
            <button
                onClick={onConvert} 
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
                Converter
            </button>
            {/* Botão "Limpar" */}
            <button
                onClick={onClear} 
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
                Limpar
            </button>
        </div>
    );
}
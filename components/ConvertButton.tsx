interface ConvertButtonProps {
    onConvert: () => void;
    onClear: () => void;
}

export default function ConvertButton({onConvert, onClear}: ConvertButtonProps){
    return(
        <div className="flex gap-2">
            <button
            onClick={onConvert}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
                Converter
            </button>
            <button
            onClick={onClear}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
                Limpar
            </button>
        </div>
        
    );
}
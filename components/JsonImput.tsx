interface JsonInputProps {
  value: string;
  onChange: (data: string) => void;
}

export default function JsonInput({ value, onChange }: JsonInputProps) {
  return (
    <div className="w-full max-w-2xl">
      <label htmlFor="jsonInput" className="block text-lg font-semibold mb-2">
        Insira o JSON:
      </label>
      <textarea
        id="jsonInput"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 p-2 border rounded-lg text-black "
        placeholder='{"nome": "João", "idade": 30}'
      />
    </div>
  );
}

interface InputProps {
  onChange: (input: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ onChange, onKeyDown }: InputProps) {
  return (
    <input
      className="bg-white text-slate-700 place px-8 rounded-s-xl placeholder:text-slate-500 focus:border-none focus:outline-none placeholder:text-left"
      placeholder="Digite um valor inicial"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      maxLength={6}
    />
  );
}

export default Input;

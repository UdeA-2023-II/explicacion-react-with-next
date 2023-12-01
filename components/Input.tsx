interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
}

const Input = ({ name, label, placeholder, type = "text" }: InputProps) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-indigo-300 px-2 py-1 my-2 rounded-lg outline-indigo-600"
      />
    </label>
  );
};

export { Input };

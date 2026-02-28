// 

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="outline-none border-b border-black bg-transparent w-full mb-2"
      />
    </div>
  );
};

export default InputField;
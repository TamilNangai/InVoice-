type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const InputField = ({ label, name, type = "string", placeholder }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium text-lg mb-1">
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full outline-none border-b border-black bg-transparent py-1 font-sanchez text-sm"
      />
    </div>
  );
};

export default InputField;
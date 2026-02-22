import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  
}) => {
  return (
    <div className="mb-4">
      <label className="font-medium font-iceberg text-lg ">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-3 py-2 outline-none  border-2 border-black rounded-md"
      />
      
    </div>
    
  );
};

export default InputField;
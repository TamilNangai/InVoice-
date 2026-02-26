// import React from "react";

// interface ProductInputProps {
//   label: string;
//   type?: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }

// const ProductInput: React.FC<ProductInputProps> = ({
//   label,
//   type = "text",
//   name,
//   value,
//   onChange,
//   placeholder,
// }) => {
//   return (
//     <div className="mb-4">
//       <label className="font-medium font-iceberg text-lg">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="py-2 outline-none border-0 border-b border-black bg-transparent"
//       />
//     </div>
//   );
// };

// export default ProductInput;










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
      <label className="font-medium font-iceberg text-lg">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2 w-24 outline-none  border-2 border-black rounded-md"
      />
      
    </div>
    
  );
};

export default InputField;
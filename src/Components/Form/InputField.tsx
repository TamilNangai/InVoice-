// interface InputProps {
//   label: string;
//   type?: string;
//   name: string;
//   placeholder?: string;
//   required?: boolean;
// }

// const Input: React.FC<InputProps> = ({
//   label,
//   type = "text",
//   name,
//   placeholder,
//   required = false,
// }) => {
//   return (
//     <div className="mb-4">
//       <label className="block mb-1 font-medium">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         required={required}
//         className="border p-2 w-full rounded"
//       />
//     </div>
//   );
// };// import React from "react";

// interface InputFieldProps {
//   label: string;
//   type?: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   type = "text",
//   name,
//   value,
//   onChange,
//   placeholder,
// }) => {
//   return (
//     <div className="mb-4">
//       <label className="font-medium font-iceberg text-lg">{label}</label>
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

// export default InputField;



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
        className="pl-3 py-2 outline-none  border-2 border-black rounded-md"
      />
    </div>
  );
};

export default InputField;
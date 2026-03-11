// import React from "react";

// interface InputFieldProps {
//   label: string;
//   type?: string;
//   name: string;
//   placeholder?: string;
//   value?: string | number;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   type = "text",
//   name,
//   placeholder,
//   value,
// }) => {
//   return (
//     <div className="mb-4">
//       <label className="block mb-1">{label}</label>

//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         defaultValue={value}
//         className="w-full pl-3 py-2 outline-none border-2 border-black rounded-md font-sanchez text-sm" />
//     </div>
//   );
// };

// export default InputField;

import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-3 py-2 outline-none border-2 border-black rounded-md font-sanchez text-sm"
      />
    </div>
  );
};

export default InputField;
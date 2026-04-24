import React from "react";

interface InputFieldProps {
  label: string
  type?: string
  name: string
  placeholder?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean,
  required?: boolean,
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  disabled = false,
  onChange,
  required = false,
  onBlur,
}) => {

  return (

    <div className="mb-4">

      <label className="block mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        min={0}
        step={1}
        placeholder={placeholder}
        required={required}
        onBlur={onBlur}
        className="w-full pl-3 py-2 outline-none border-2 border-black rounded-md font-sanchez text-sm sm:text-[10px]"
      />

    </div>

  )

}

export default InputField

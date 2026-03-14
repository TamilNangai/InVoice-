interface InputFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  required?:boolean
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  
}) => {
  return (
    <div className="mb-4">

      <label className="block mb-1">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className="border-b border-black outline-none w-full bg-transparent text-[15px] font-sanchez"
     
      />

    </div>
  )
}

export default InputField
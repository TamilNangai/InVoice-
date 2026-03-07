

interface InputFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={value}
        className="w-full pl-3 py-2 outline-none border-2 border-black rounded-md font-sanchez text-sm" />
    </div>
  )
}

export default InputField
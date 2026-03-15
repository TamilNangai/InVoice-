
interface InputFieldProps {
  label: string
  name: string
  type?: string
  value?: string | number
  placeholder?: string
  required?: boolean
  maxLength?: number
  disabled?: boolean
  pattern?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}


const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  disabled = false,
  required = false,
  maxLength,
  onChange,
  onBlur,
  pattern
}) => {

  

  return (

    <div className="mb-4">

      <label className="block mb-1">
        {label}  {name == "gst" && <span className="text-gray-500">(optional)</span>} {name == "trainer" && <span className="text-gray-500">(optional)</span>}
      </label>
     

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        disabled={disabled}
        pattern={pattern}
        required={required}
        className="border-b border-black outline-none w-full bg-transparent text-[15px] font-sanchez"
      />


    </div>

  )
}

export default InputField

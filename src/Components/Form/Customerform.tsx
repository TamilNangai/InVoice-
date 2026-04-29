import InputField from "@/Components/Form/InputField"

type CustomerData = {
  customer: string
  email: string
  office: string
  gst: string
  phone: string
  address: string
}

type Props = {
  data: CustomerData
  setData: (data: CustomerData) => void
  onEmailChange?: (email: string) => void // <-- new prop to pass email up
}

const CustomerForm: React.FC<Props> = ({ data, setData }) => {

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target

  setData({
    ...data,
    [name]: value
  })
}

  return (

    <div className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl font-bold mb-4 pl-8 sm:text-[16px]">
        Customer Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-md w-full sm:text-[14px]">

        <div>

          <InputField
            label="Customer Name"
            name="customer"
            placeholder="Swetha"
            value={data.customer || ""}
            onChange={handleChange}
            required
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="swetha@gmail.com"
            value={data.email || ""}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
          />

          <InputField
            label="Office Name"
            name="office"
            placeholder="Kings College of Engineering"
            value={data.office || ""}
            onChange={handleChange}
            required
          />

          <InputField
            label="GST Number"
            name="gst"
            placeholder="33ABCDE1234F1Z5"
            value={data.gst || ""}
            onChange={handleChange}
            maxLength={15}
            pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$"
          />

        </div>

        <div className="mt-20">

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={data.phone || ""}
            onChange={handleChange}
            maxLength={10}
            required
          />

          <InputField
            label="Office Address"
            name="address"
            placeholder="Chennai, Tamil Nadu"
            value={data.address || ""}
            onChange={handleChange}
            required
          />

        </div>

      </section>

    </div>

  )
}

export default CustomerForm
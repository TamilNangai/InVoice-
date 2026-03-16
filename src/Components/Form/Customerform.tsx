

import React, { useState } from "react"
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
}

const CustomerForm: React.FC<Props> = ({ data, setData }) => {

  const [errors, setErrors] = useState<Partial<CustomerData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    // phone numbers only
    if (name === "phone" && !/^\d*$/.test(value)) return

    // GST uppercase + limit
    if (name === "gst") {

      const gstValue = value.toUpperCase().slice(0, 15)

      setData({
        ...data,
        [name]: gstValue
      })

      return
    }

    setData({
      ...data,
      [name]: value
    })
  }


  const validateField = (name: string, value: string) => {

    let error = ""

    if (name === "customer" && !value.trim())
      error = "Customer name is required"

    if (name === "email" && !value.includes("@gmail.com"))
      error = "Email must include @gmail.com"

    if (name === "office" && !value.trim())
      error = "Office name is required"

    if (name === "address" && !value.trim())
      error = "Address is required"

    if (name === "phone" && !/^\d{10}$/.test(value))
      error = "Phone must be 10 digits"

    if (name === "gst") {

      const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$/

      if (value && !gstRegex.test(value)) {
        error = "Enter a valid GST number"
      }

    }


    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  return (

    <div className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl font-bold mb-4 pl-8">
        Customer Details
      </h2>

      <section className="grid grid-cols-2 gap-10 font-iceberg text-md w-full">

        <div>

          <InputField
            label="Customer Name"
            name="customer"
            placeholder="Swetha"
            value={data.customer || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            required
          />
          {errors.customer && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.customer}</p>}

          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="swetha@gmail.com"
            value={data.email || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            required
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
          />
          {errors.email && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.email}</p>}

          <InputField
            label="Office Name"
            name="office"
            placeholder="Kings College of Engineering"
            value={data.office || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            required
          />
          {errors.office && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.office}</p>}

          <InputField
            label="GST Number"
            name="gst"
            placeholder="33ABCDE1234F1Z5"
            value={data.gst || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            maxLength={15}
            pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$"
          />

          {errors.gst && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.gst}</p>}

        </div>

        <div className="mt-20">

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={data.phone || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            maxLength={10}
            required
          />
          {errors.phone && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.phone}</p>}

          <InputField
            label="Office Address"
            name="address"
            placeholder="Chennai, Tamil Nadu"
            value={data.address || ""}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            required
          />
          {errors.address && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.address}</p>}

        </div>

      </section>

    </div>

  )
}

export default CustomerForm

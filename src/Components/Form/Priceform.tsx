import React, { useState } from "react";
import InputField from "./Priceinput";

type Props = {
  data: {
    total: number
    due: number
    paid: number
    duedate: string
    paymentMethod: string
  }
  setData: (data: any) => void
}

const PriceForm = ({ data, setData }: Props) => {


  const [errors, setErrors] = useState<any>({})

  const validate = (name: string, value: string) => {

    let message = ""

    if (!value) {
      message = "This field is required"
    }

    if (name === "paid") {

      const num = Number(value)

      if (num < 0) {
        message = "Paid amount cannot be negative"
      }
      if (num === 0) {
        message = "Paid amount cannot be zero"
      }
      if (num > data.total) {
        message = "Paid cannot exceed total amount"
      }

    }

    setErrors((prev: any) => ({
      ...prev,
      [name]: message
    }))

  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {

    const { name, value } = e.target

    validate(name, value)

  }


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target

    if (name === "paid") {

      const total = Math.round(Number(data.total))

      let paid = Math.round(Number(value))

      // prevent negative
      if (paid < 0) paid = 0

      // prevent paid > total
      if (paid > total) paid = total

      const due = total - paid

      setData({
        ...data,
        paid,
        due
      })

      return
    }

    setData({
      ...data,
      [name]: value
    })
  }



  return (

    <div className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl font-semibold mb-4 pl-8">
        Price Details
      </h2>

      <section className="grid grid-cols-2 gap-10 text-lg w-full h-full">

        <div>

          <InputField
            label="Total Amount"
            name="total"
            type="number"
            value={data.total}
            disabled
          />

          <InputField
            label="Due Amount"
            name="due"
            type="number"
            value={data.due}
            disabled
          />

        </div>

        <div>

          <InputField
            label="Paid Amount"
            name="paid"
            type="number"
            value={data.paid}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.paid && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.paid}</p>}




          <InputField
            label="Due Date"
            type="date"
            name="duedate"
            value={data.duedate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.duedate && <p className="text-red-500 text-xs font-sanchez mb-4">{errors.duedate}</p>}

        </div>

      </section>

      <div className="flex items-center justify-center mt-6">

        <div className="text-sm font-sanchez">

          <label className="block mb-1 font-iceberg text-lg">
            Payment Method
          </label>

         
          <select
            name="paymentMethod"
            value={data.paymentMethod}
            onChange={handleChange}
            onBlur={(e) => validate(e.target.name, e.target.value)}
            className="py-2 px-3 border-2 border-black rounded-md"
            required
          >
            {errors.paymentMethod && (
              <p className="text-red-500 text-xs">
                {errors.paymentMethod}
              </p>
            )}



            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Card">Card</option>

          </select>

        </div>

      </div>

    </div>

  )

}

export default PriceForm

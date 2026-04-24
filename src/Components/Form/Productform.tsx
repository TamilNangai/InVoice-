

import React, { useState } from "react"

type Product = {
  productName: string
  sub?: string
  price: number
  tax: number
}

type Props = {
  data: Product[]
  setData: (data: Product[]) => void
  title?: string
  nameLabel?: string
  addButton?: string
  showSub?: boolean
}

const ProductForm: React.FC<Props> = ({
  data,
  setData,
  title = "Service Details",
  nameLabel = "Service Name",
  addButton = "+ Add Service Line",
  showSub = false
}) => {

  const handleChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    setData(updated)
  }

  const addRow = () => {
    setData([
      ...data,
      { productName: "", sub: "", price: 0, tax: 0 }
    ])
  }

  const deleteRow = (index: number) => {
    if (data.length === 1) return
    setData(data.filter((_, i) => i !== index))
  }

  const [errors, setErrors] = useState<any>({})

  const validate = (name: string, value: string, index: number) => {
    let message = ""

    if (!value) message = "Required"

    if (name === "price" && Number(value) < 0) {
      message = "Invalid"
    }

    if (name === "tax") {
      const num = Number(value)
      if (num < 0 || num > 100) message = "0–100 only"
    }

    setErrors((prev: any) => ({
      ...prev,
      [`${name}-${index}`]: message
    }))
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target
    validate(name, value, index)
  }

  return (
    <div className="p-3 sm:p-4 md:p-5 xl:p-6 
    rounded-xl md:rounded-2xl 
    border border-black 
    shadow-md md:shadow-lg 
    bg-white">

      <h2 className="pl-8 text-sm sm:text-base md:text-lg xl:text-xl 
      font-iceberg font-bold mb-4 md:mb-6">
        {title}
      </h2>

      <div className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} 
      gap-2 md:gap-3 
      text-[11px] sm:text-xs md:text-sm xl:text-base 
      font-iceberg`}>

        <div className="col-span-5">{nameLabel}</div>

        {showSub && <div className="col-span-2">Sub</div>}

        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>
      </div>

      {data.map((row, index) => (
        <div key={index}>
          <div
            className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} 
            items-center gap-2 md:gap-3 mt-2 md:mt-3 
            text-[11px] sm:text-xs md:text-sm`}
          >
            <input
              name="productName"
              value={row.productName}
              placeholder={nameLabel}
              onChange={(e) => handleChange(index, "productName", e.target.value)}
              onBlur={(e) => handleBlur(e, index)}
              className="col-span-5 border border-black 
              rounded-md px-2 py-1 md:px-3 md:py-2"
            />

            {showSub && (
              <select
                value={row.sub || ""}
                name="sub"
                onChange={(e) => handleChange(index, "sub", e.target.value)}
                onBlur={(e) => handleBlur(e, index)}
                className="col-span-2 border border-black 
                rounded-md px-2 md:px-2 py-1 md:py-2"
              >
                <option value="">Select</option>
                <option value="1M">1M</option>
                <option value="2M">2M</option>
                <option value="6M">6M</option>
                <option value="1Y">1Y</option>
              </select>
            )}

            <input
              name="price"
              type="number"
              value={row.price}
              onChange={(e) => handleChange(index, "price", Number(e.target.value))}
              onBlur={(e) => handleBlur(e, index)}
              className="col-span-2 border border-black 
              rounded-md px-2 py-1 md:px-3 md:py-2"
            />

            <input
              name="tax"
              type="number"
              value={row.tax}
              onChange={(e) => handleChange(index, "tax", Number(e.target.value))}
              onBlur={(e) => handleBlur(e, index)}
              className="col-span-2 border border-black 
              rounded-md px-2 py-1 md:px-3 md:py-2"
            />

            <button
              type="button"
              onClick={() => deleteRow(index)}
              disabled={data.length === 1}
              className={`col-span-1 rounded-md 
              text-white text-xs md:text-sm 
              py-1 md:py-2
              ${data.length === 1
                  ? "bg-gray-400"
                  : "bg-orange-500 hover:bg-orange-600"
                }`}
            >
              ✕
            </button>
          </div>

          <div className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} gap-2 md:gap-3`}>
            <div className="col-span-5">
              {errors[`productName-${index}`] && <span className="text-red-500 text-xs">{errors[`productName-${index}`]}</span>}
            </div>

            {showSub && <div className="col-span-2">
              {errors[`sub-${index}`] && <span className="text-red-500 text-xs">{errors[`sub-${index}`]}</span>}
            </div>}

            <div className="col-span-2">
              {errors[`price-${index}`] && <span className="text-red-500 text-xs">{errors[`price-${index}`]}</span>}
            </div>

            <div className="col-span-2">
              {errors[`tax-${index}`] && <span className="text-red-500 text-xs">{errors[`tax-${index}`]}</span>}
            </div>

            <div className="col-span-1"></div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="mt-4 md:mt-6 w-full 
        border border-black 
        rounded-md 
        py-1.5 md:py-2 
        text-xs sm:text-sm md:text-base 
        bg-gray-200 hover:bg-gray-300"
      >
        {addButton}
      </button>
    </div>
  )
}

export default ProductForm
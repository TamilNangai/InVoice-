import React,{useState} from "react"

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

    updated[index] = {
      ...updated[index],
      [field]: value
    }

    setData(updated)
  }

  const addRow = () => {

    setData([
      ...data,
      {
        productName: "",
        sub: "",
        price: 0,
        tax: 0
      }
    ])
  }

  const deleteRow = (index: number) => {

    // Prevent deleting last row
    if (data.length === 1) return

    const updated = data.filter((_, i) => i !== index)

    setData(updated)
  }


  const [errors, setErrors] = useState<any>({});

  const validate = (name: string, value: string, index: number) => {

    let message = "";

    if (!value) {
      message = "This field is required";
    }

    if (name === "price") {
      const num = Number(value);

      if (num < 0) {
        message = "Price cannot be negative";
      }
    }

    if (name === "tax") {
      const num = Number(value);

      if (num < 0) {
        message = "Tax cannot be negative";
      }

      if (num > 100) {
        message = "Tax cannot exceed 100%";
      }
    }

    setErrors((prev: any) => ({
      ...prev,
      [`${name}-${index}`]: message
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {

    const { name, value } = e.target

    validate(name, value, index)

  }


  return (

    <div className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-white">

      <h2 className="text-xl font-iceberg mb-6 font-bold pl-2">
        {title}
      </h2>

      {/* Header */}

      <div className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} gap-3 font-iceberg text-lg`}>

        <div className="col-span-5">
          {nameLabel}
        </div>

        {showSub && (
          <div className="col-span-2">
            Sub
          </div>
        )}

        <div className="col-span-2">
          Price
        </div>

        <div className="col-span-2">
          Tax %
        </div>

        <div className="col-span-1"></div>

      </div>

      {/* Rows */}

      {data.map((row, index) => (
        <div key={index}>

        <div
          
          className={`grid ${showSub ? "grid-cols-12" : "grid-cols-10"} items-center gap-3 mt-3 font-sanchez text-sm`}
        >

          {/* Name */}

          {/* <input
            placeholder={nameLabel}
            value={row.productName}
            onChange={(e) =>
              handleChange(index, "productName", e.target.value)
            }
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          /> */}

          <input
            name="productName"
            placeholder={nameLabel}
            value={row.productName}
            onChange={(e) =>
              handleChange(index, "productName", e.target.value)
            }
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />
         

          {/* Subscription column only for product */}

          {showSub && (

            <select
              value={row.sub || ""}
              onChange={(e) =>
                handleChange(index, "sub", e.target.value)
              }
              className="col-span-2 border-2 border-black rounded-md px-2 py-2"
            >
              <option value="">Select</option>
              <option value="1M">1M</option>
              <option value="2M">2M</option>
              <option value="6M">6M</option>
              <option value="1Y">1Y</option>
            </select>

          )}

          {/* Price */}

          {/* <input
            type="number"
            placeholder="10000"
            value={row.price}
            onChange={(e) =>
              handleChange(index, "price", Number(e.target.value))
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          /> */}

          <input
            name="price"
            type="number"
            placeholder="10000"
            value={row.price}
            onChange={(e) =>
              handleChange(index, "price", Number(e.target.value))
            }
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />
          
          {/* Tax */}

          {/* <input
            type="number"
            placeholder="18"
            value={row.tax}
            onChange={(e) =>
              handleChange(index, "tax", Number(e.target.value))
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          /> */}
                                

          <input
            name="tax"
            type="number"
            placeholder="18"
            value={row.tax}
            onChange={(e) =>
              handleChange(index, "tax", Number(e.target.value))
            }
            onBlur={(e) => handleBlur(e, index)}
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />
                                 



          {/* Delete */}

          <button
            type="button"
            onClick={() => deleteRow(index)}
            disabled={data.length === 1}
            className={`col-span-1 text-white rounded-md py-2
            ${data.length === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500"
              }`}
          >
            ✕
          </button>

        </div>
         { errors[`productName-${index}`] && <p className="text-red-500 text-xs font-sanchez my-4 col-span-full">{errors[`productName-${index}`]}</p> }   
         </div>

      ))}

      {/* Add Row */}

      <button
        type="button"
        onClick={addRow}
        className="mt-6 w-full border-2 border-black rounded-md py-2 bg-gray-200 font-medium font-sanchez"
      >
        {addButton}
      </button>

    </div>
  )
}

export default ProductForm

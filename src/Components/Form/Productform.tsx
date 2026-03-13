type Product = {
  productName: string
  sub: string
  price: number
  tax: number
}

type Props = {
  data: Product[]
  setData: (data: Product[]) => void
}

const ProductForm = ({ data, setData }: Props) => {

  const handleChange = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    const updated = [...data]
    updated[index][field] = value as never
    setData(updated)
  }

  const deleteRow = (index: number) => {
    const updated = data.filter((_, i) => i !== index)
    setData(updated)
  }

  const addRow = () => {
    setData([
      ...data,
      { productName: "", sub: "1M", price: 0, tax: 18 }
    ])
  }

  return (
    <form className="p-6 rounded-2xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">

      <h2 className="text-xl font-iceberg mb-6 font-bold pl-8">
        Product Details
      </h2>

      {/* Header */}
      <div className="grid grid-cols-12 gap-3 font-iceberg text-lg w-full">
        <div className="col-span-5">Product Name</div>
        <div className="col-span-2">Sub</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Tax %</div>
        <div className="col-span-1"></div>
      </div>

      {/* Rows */}
      {data.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-12 items-center gap-3 mt-3"
        >

          <input
            value={product.productName}
            placeholder={
              index === 0
                ? "Report Management Software"
                : "Hall Booking software"
            }
            onChange={(e) =>
              handleChange(index, "productName", e.target.value)
            }
            className="col-span-5 border-2 border-black rounded-md px-3 py-2"
          />

          <select
            value={product.sub}
            onChange={(e) =>
              handleChange(index, "sub", e.target.value)
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          >
            <option value="1M">1M</option>
            <option value="2M">2M</option>
            <option value="6M">6M</option>
            <option value="1Y">1Y</option>
          </select>

          <input
            type="number"
            value={product.price}
            onChange={(e) =>
              handleChange(index, "price", Number(e.target.value))
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <input
            type="number"
            value={product.tax}
            onChange={(e) =>
              handleChange(index, "tax", Number(e.target.value))
            }
            className="col-span-2 border-2 border-black rounded-md px-3 py-2"
          />

          <button
            type="button"
            onClick={() => deleteRow(index)}
            className="col-span-1 bg-orange-500 text-white rounded-md py-2"
          >
            ✕
          </button>

        </div>
      ))}

      {/* Add Row Button */}
      <button
        type="button"
        onClick={addRow}
        className="mt-6 w-full border-2 border-black rounded-md py-1 bg-gray-200 font-medium font-sanchez"
      >
        + Add Service Line
      </button>

    </form>
  )
}

export default ProductForm
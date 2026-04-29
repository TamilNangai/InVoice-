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

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target

  setData({
    ...data,
    [name]: value
  })
}
  return (

    <div className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)] ">

      <h2 className="xl:text-xl sm:text-[16px] font-semibold mb-4 pl-8">
        Price Details
      </h2>
      <main className="grid grid-rows-subgrid w-full h-fit">
        <section className="grid grid-cols-2 gap-10 xl:text-lg xl:w-full xl:h-full sm:text-[14px]">

          <div className="">

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
            />




            <InputField
              label="Due Date"
              type="date"
              name="duedate"
              value={data.duedate}
              onChange={handleChange}

            />

          </div>

        </section>

        <div className="w-full h-fit grid grid-rows-1 place-items-center">

          <div className="xl:text-md sm:text-[10px] font-sanchez">

            <label className="block mb-1 font-iceberg xl:text-lg sm:text-[14px]">
              Payment Method
            </label>


            <select
              name="paymentMethod"
              value={data.paymentMethod}
              onChange={handleChange}
              className="py-2 px-3 sm:py-3 border-2 border-black rounded-md"

            >



              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Card">Card</option>

            </select>

          </div>

        </div>
      </main>

    </div>

  )

}

export default PriceForm

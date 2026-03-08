import React from "react";
import InputField from "./Priceinput";

type PriceProps = {
  total: string;
  due: string;
  paid: string;
  duedate: string;
  paymentMethod: string;
};

const PriceForm = (props: PriceProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      total: (form.elements.namedItem("total") as HTMLInputElement).value,
      due: (form.elements.namedItem("due") as HTMLInputElement).value,
      paid: (form.elements.namedItem("paid") as HTMLInputElement).value,
      duedate: (form.elements.namedItem("duedate") as HTMLInputElement).value,
      paymentMethod: (form.elements.namedItem("paymentMethod") as HTMLInputElement).value,
    };

    console.log("Price Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Price Details
      </h2>

      <section className="grid grid-cols-2 gap-10 text-lg w-full h-full">

        <div>
          <InputField
            label="Total Amount"
            name="total"
            type="number"
            value={props.total}
            placeholder="110000"
          />

          <InputField
            label="Due Amount"
            name="due"
            type="number"
            value={props.due}
            placeholder="10000"
          />
        </div>

        <div>
          <InputField
            label="Paid Amount"
            name="paid"
            type="number"
            value={props.paid}
            placeholder="100000"
          />

          <InputField
            label="Due Date"
            type="date"
            name="duedate"
            value={props.duedate}
          />
        </div>

      </section>

      <div className="flex items-center justify-center mt-6">
        <div className="text-sm font-sanchez">
          <label className="block mb-1 text-lg">
            Payment Method
          </label>

          <select
            name="paymentMethod"
            defaultValue={props.paymentMethod}
            className="py-2 px-3 border-2 border-black rounded-md"
          >
            <option value="Case" >Cash</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Card">Card</option>
          </select>
        </div>
      </div>

    </form>
  );
};

export default PriceForm;
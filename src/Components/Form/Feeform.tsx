import InputField from "@/Components/Form/InputField";

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
};

const FeeForm = ({ data, setData }: Props) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setData({
      ...data,
      [name]: Number(value)
    })

  }


 

  return (
    <main className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">

      <h2 className="text-xl sm:text-[16px] font-semibold mb-4 pl-8">Fee Breakdown</h2>

      <section className="grid grid-cols-2 gap-10 text-lg sm:text-[14px]">

        <div>

          <InputField
            label="Training Fee"
            name="training"
            type="number"
            value={data.training}
            onChange={handleChange}
            required
          />

          <InputField
            label="Certificate Fee"
            name="certificate"
            type="number"
            value={data.certificate}
            onChange={handleChange}
            required
          />

          <InputField
            label="Tax Rate (%)"
            name="tax"
            type="number"
            value={data.tax}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <InputField
            label="Internship Fee"
            name="internship"
            type="number"
            value={data.internship}
            onChange={handleChange}
            required
          />

          <InputField
            label="Discount Amount"
            name="discount"
            type="number"
            value={data.discount}
            onChange={handleChange}
            required
          />

        </div>

      </section>

    </main>
  );
};

export default FeeForm;

import InputField from "@/Components/Form/InputField";

type StudentData = {
  studentName: string;
  college: string;
  phone: string;
  email: string;
};

type Props = {
  data: StudentData;
  setData: (data: StudentData) => void;
};

const StudentForm: React.FC<Props> = ({ data, setData }) => {

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };




  return (
    <main className="p-6 font-iceberg rounded-xl border border-black shadow-[5px_5px_10px_rgba(0,0,0,0.2)] ">

      <h2 className="xl:text-xl sm:text-[16px] font-semibold mb-4 pl-8">
        Student Details
      </h2>

      <section className="grid grid-cols-2 gap-10 xl:text-lg sm:text-[14px]">

        <div>

          <InputField 
            label="Student Name"
            name="studentName"
            value={data.studentName}
            onChange={handleChange}
            placeholder="Swetha"
            required
          />

          <InputField
            label="College Name"
            name="college"
            value={data.college}
            onChange={handleChange}
            placeholder="Kings College of Engineering"
            required
          />

        </div>

        <div>

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            required
          />

          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="swetha@gmail.com"
            required
          />

         
        </div>

      </section>
    </main>
  );
};

export default StudentForm;

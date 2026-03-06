import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Feeform"
import Programform from "@/Components/Form/Programform"
import Priform from "@/Components/Form/Priceform"
import Stdform from "@/Components/Form/Stdform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"

const Internship_invoice = () => {
  return (
    <div className="w-[1500px]">
      <div >
        <Header h1="New Internship Invoice"
          para="#INV-2026-001" />
        <div className="absolute right-10 top-4">
          <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1='' />
        </div>
      </div>
      <section className="flex">
        <div className="w-[50%] space-y-7">
          <Stdform />
          <Programform />
          <Feeform />
          <Priform />
        </div>
        <div className='w-[50%] p-10'>
          <Bill button={<Buttons src1='' src2='' h1="Internship Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxhead='Program Enrolled' boxprogram='Web Development Internship' batch='Batch: Summer 2024- A' duration='Duration: Jan 01 -Feb 25,2026' detailhead='Program Enrolled' head11="Training Program Fee" head12="Core Curriculum Access and mentorship" amount1={500.00} head21="Internship Administrative Fee" head22="Project allocation and assessment" amount2={250.00} head31='Certification Issuance' head32='Digital and physical certificate' amount3={50} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects." />
        </div>
      </section>

    </div>
  )
}
export default Internship_invoice
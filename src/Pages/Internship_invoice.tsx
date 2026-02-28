import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Programform"
import Programform from "@/Components/Form/Programform"
import Priform from "@/Components/Form/Priceform"
import Stdform from "@/Components/Form/Stdform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"

const Internship_invoice = () => {
  return (
    <div>
      <div className='w-[1200px]'>
        <Header h1="New Internship Invoice"

          para="#INV-2026-001" />
        <div className="absolute right-10 top-4">
          <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1='' />
        </div>
      </div>
      <section className="flex">
        <div className="w-[50%] space-y-7">
          <Stdform />
          <Feeform />
          <Programform />
          <Priform />        </div>
        <div className='w-[50%] flex justify-end items-center -mt-72'>
          <Bill button={<Buttons src1='' src2='' h1="Service Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Service Details' head11="Static Website" head12="Srv:0010" amount1={10000.00} head21="Dynamic Website" head22="Srv:0011" amount2={20000.00} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Thank you for your business. Please remit payment within 30 das" />
        </div>
      </section>

    </div>
  )
}
export default Internship_invoice
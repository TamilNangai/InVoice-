import Header from '@/Components/Nav/Header'
import Button from '@/Components/Button/Buttons'
import Bill from '@/Components/Invoice/Bill'

const Service_invoice = () => {
  return (
    <div>
 <Header h1="Products & Inverntory"
        h2="Manage Your product catalog and service offerings."/>  )
      <div className='w-full flex justify-end items-center'>


        <div></div>


        <div className='w-[50%] flex justify-end items-center'>
          <Bill button={<Button h1="Service Invoice" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Service Details' head11="Static Website" head12="Srv:0010" amount1={10000.00} head21="Dynamic Website" head22="Srv:0011" amount2={20000.00} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Thank you for your business. Please remit payment within 30 das" />
        </div>
      </div>
        </div>
  )
}

export default Service_invoice
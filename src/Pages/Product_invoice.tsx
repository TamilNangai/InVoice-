import Header from "@/Components/Nav/Header"
import Button from '@/Components/Button/Buttons'
import Bill from '@/Components/Invoice/Bill'

const Product_invoice = () => {
  return (
    <div className="flex flex-col">
      <Header h1="Products & Inverntory"
        h2="Manage Your product catalog and service offerings." />
      <div className='w-full flex justify-end items-center'>
        <div className='w-[50%] flex flex-col justify-center my-10 items-center'>
          <Bill button={<Button h1="Product Invoice" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." />
        </div>
       


       <div></div>



       
      </div>

    </div>
  )
}

export default Product_invoice
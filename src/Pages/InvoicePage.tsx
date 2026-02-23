import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Stdform from "@/Components/Form/Stdform"
import Button from '@/Components/Button/Buttons'

const InvoicePage = () => {
  return (
    <div className=' flex flex-col'>
      <Header h1="Invoice Page" h2="Manage your invoices here." />
      <div className='w-full flex justify-end items-center'>
        <div className='w-[50%] flex flex-col justify-center my-10 items-center'><Stdform /><Stdform /><Stdform /><Stdform /></div>
        <div className='w-[50%] flex justify-end items-center p-5'>
          {/* <Bill button={}  name=""  email=""  phone={}  college=""  invoiceid=""  date=""  duedate=""  boxhead=""  boxprogram=""  batch=""  duration="" boxinvoicedate="" boxduedate="" boxref=""   count1=""    count2="" detailhead="" head11=""  head12=""  amount1={} head21=""  head22=""  amount2={} head31=""  head32=""  amount3={} subamount11={}  subamount12={}  subamount13={}  subamount21={}  subamount22={}  subamount23={}  conditionPara="" />  */}
          <Bill button={<Button h1='Internship Invoice'/>} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxhead="Program Enrolled" boxprogram="Web Development Internship " batch="Batch: Summer 2024- A" duration="Duration: Jan 01 -Feb 25,2026" detailhead='Program Enrolled' head11="Training Program Fee" head12="Core Curriculum Access and mentorship" amount1={500.00} head21="Internship Administrative Fee" head22="Project allocation and assessment" amount2={250.00} head31="Certification Issuance" head32="Digital and physical certificate" amount3={50.00} subamount11={800.00} subamount12={0.00} subamount13={50.00} subamount21={850.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects." /> 
          </div> 
      </div>
    </div>
  )
}

export default InvoicePage
import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
const Internship_invoice = () => {
  return (
    <div>
      <Header h1="Products & Inverntory"
        h2="Manage Your product catalog and service offerings." />
    <div className='w-full flex '> 
      <div></div>
      <div className='w-[50%] flex justify-end items-center'> <Bill /></div>          
      
    </div>
    </div>

  )
}

export default Internship_invoice
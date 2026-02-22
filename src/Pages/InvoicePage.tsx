import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Stdform from "@/Components/Form/Stdform"

const InvoicePage = () => {
  return (
    <div className=' flex flex-col'>
      <Header h1="Invoice Page" h2="Manage your invoices here." />
      <div className='w-full flex justify-end items-center'>
        <div className='w-[50%] flex flex-col justify-center my-10 items-center'><Stdform /><Stdform /><Stdform /><Stdform /></div>
        <div className='w-[50%] flex justify-end items-center'><Bill /></div>
      </div>
    </div>
  )
}

export default InvoicePage
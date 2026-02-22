import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"

const InvoicePage = () => {
  return (
    <div>
      
      <Header h1="Invoice Page" h2="Manage your invoices here." />
      <div>
        <Bill />
      </div>
    </div>
  )
}

export default InvoicePage
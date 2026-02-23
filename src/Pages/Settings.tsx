import Buttons from '@/Components/Button/Buttons'
import Header from '@/Components/Nav/Header'
import Companyform from '@/Components/Form/Companyform'
import Banner from '@/Components/Cards/Banner'
const Settings = () => {
  return (
    <div>
      <div>
        <Header h1="Settings"
          para="Manage Your product catalog and service offerings." />
      </div>
      <div className='mt-10'>
        <Banner h1="Invoice Types Configuration"
          para1="Enable/Disable invoice types and configure their templates and rules.s"
          h2="Internship Invoice"
          para2="For training programs and certifications"
          h3="Product Invoice"
          para3="For Physical goods and inventory salels"
          h4="Other / Custom Invoice"
          para4="Flexible billing for misc services" 
          h5='Configure Template'
          h6='Configure Template'
          h7='Configure Template'/>
      </div>
      <div className="absolute right-10 top-4">
        <Buttons src="" h1="Save Settings" />
      </div>
      <Companyform companyName="Sweatha" companyEmail="sweatha@gmail.com" companyPhone="+91 1234567890" companyAddress="Kings College of Engineering" companypara="These details will appear on your invoices." />

    </div>
  )
}

export default Settings
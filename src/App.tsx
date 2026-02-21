import Buttons from "./Components/Button/Buttons"
import Std from './Components/Form/Stdform'
import Header from "./Components/Nav/Header"
import src from './assets/Vector.png'
import vectorw from './assets/Vectorw.png'
import Add from './Components/Form/Add'
import Popup1 from "./assets/Popup1.png"
import Popup2 from "./assets/Popup2.png"
import Popup3 from "./assets/Popup3.png"
import Popup4 from "./assets/Popup4.png"
import Create from "./Components/Form/Create"
import Internship_invoice from "./Pages/Internship_invoice"
import InvoicePage from "./Pages/InvoicePage"
import Product_invoice from "./Pages/Product_invoice"
import Products from "./Pages/Products"
import Reports from "./Pages/Reports"
import Service_invoice from "./Pages/Service_invoice"
import Settings from "./Pages/Settings"
function App() {

  return (
    <>
    <Internship_invoice/>
    <InvoicePage/>
    <Product_invoice/>
    <Products/>
    <Reports/>
    <Settings/>
      <Buttons src={src} h1="Continue" />
      {/* <Std/> */}
      <Header h1="Products & Inverntory"
        h2="Manage Your product catalog and service offerings."
      />
      <Create
        popup1={Popup1}
        popup2={Popup2}
        popup3={Popup3}
        popup4={Popup4}
src1={vectorw}
        h1="Select Invoice Type"
        para1="Choose the type of invoice you want to create. "
        para6="This will customize the form fields for your needs. "
        h2="Student Internship"
        para2="Internship fees, training
programs, certifications"
        h3="Product Invoice"
        para3="Physical or digital product
billing and shipping"
        h4="Service Invoice"
        para4="Physical or digital product
billing and shipping"
        h5="Other Invoice"
        para5="Customer or miscellaneous
service billing"
/>
    </>
  )
}

export default App

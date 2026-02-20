import { HashRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Products from "./Pages/Products"
import InvoicePage from "./Pages/InvoicePage"
import Product_invoice from "./Pages/Product_invoice"
import Settings from "./Pages/Settings"
import Reports from "./Pages/Reports"
import Internship_invoice from "./Pages/Internship_invoice"
import Service_invoice from "./Pages/Service_invoice"
import Sidebar from "./Components/Sidebar"

function App() {

  return (
    <>
      <HashRouter>
        <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/InvoicePage" element={<InvoicePage />} />
          <Route path="/Internship_invoice" element={<Internship_invoice />} />
          <Route path="/Product_invoice" element={<Product_invoice />} />
          <Route path="/Service_invoice" element={<Service_invoice />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} /> 
        </Routes>
        </div>
      </HashRouter>
      
    </>
  )
}

export default App

import { HashRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Products from "./Pages/Products"
import InvoicePage from "./Pages/InvoicePage"
import Product_invoice from "./Pages/Product_invoice"
import Settings from "./Pages/Settings"
import Reports from "./Pages/Reports"
import Internship_invoice from "./Pages/Internship_invoice"
import Service_invoice from "./Pages/Service_invoice"
import Sidebar from "./Components/Nav/Sidebar"

function App() {

  return (
    <>
      <HashRouter>
        <div className="min-w-screen min-h-screen flex">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="invoice-page" element={<InvoicePage />} />
            <Route path="internship-invoice" element={<Internship_invoice />} />
            <Route path="product-invoice" element={<Product_invoice />} />
            <Route path="service-invoice" element={<Service_invoice />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
        </div>
      </HashRouter>
      
    </>
  )
}

export default App

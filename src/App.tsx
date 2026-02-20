import Buttons from "./Components/Button/Buttons"
<<<<<<< HEAD
import Std from'./Components/Form/Stdform'
import Sidebar from "./Components/Sidebar"
function App() {

  return (
    <>      
      <Sidebar/>
=======
import Std from './Components/Form/Stdform'
import Header from "./Components/Nav/Header"
import src from './assets/Vector.png'
import Popup from './Components/Form/Popup'
import Popup1 from "./assets/Popup1.png"
import Popup2 from "./assets/Popup2.png"
import Popup3 from "./assets/Popup3.png"
import Popup4 from "./assets/Popup4.png"

function App() {

  return (
    <>
      <Buttons src={src} h1="Continue" />
      {/* <Std/> */}
      <Header h1="Products & Inverntory"
        h2="Manage Your product catalog and service offerings."
      />
      <Popup
        popup1={Popup1}
        popup2={Popup2}
        popup3={Popup3}
        popup4={Popup4}

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
service billing"/>
>>>>>>> 51d50bac20bacf9e02aa186f869a18792d7a1c7d
    </>
  )
}

export default App

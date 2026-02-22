import Header from "@/Components/Nav/Header"
import Add  from "@/Components/Form/Add"
import Stdform from "@/Components/Form/Stdform"
function Dashboard() {
  return (
    <div>
      <Header  h1="Dashboard"
        h2=""
      />
            <Add
        h1="Add Products"
        h2="Details"
        h3="Product & Service Details"
        h4="Product or Service Name"
        h5="Product or Service ID"
        h6="Price Details"
        h7="Price"
        para1="Manage your product catalog and service offerings."
        src="" />
        
    </div>
  )
}

export default Dashboard


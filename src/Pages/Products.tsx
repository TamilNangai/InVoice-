import Add from "@/Components/Cards/Add"
import Header from "@/Components/Nav/Header"
import ProductTable from "@/Components/Table/ProductTable"
import vectorw from '@/assets/Vectorw.png'


const Products = () => {
  return (
    <>
    <div className="">
      <Header h1="Products & Inverntory"
        para="Manage Your product catalog and service offerings." />
       
         <div className="absolute right-10 top-4">
         <Add
        h1="Add Products"
        h2="Details"
        h3="Product & Service Details"
        h4="Product or Service Name"
        h5="Product or Service ID"
        h6="Price Details"
        h7="Price"
        h8="Add Product"
        para1="Manage your product catalog and service offerings."
        src1={vectorw}
        src2="" />
        </div>
    </div>
    <div className="mt-20">
      <h1>Product Details</h1>
        <ProductTable />
    </div>
    </>
  )
}

export default Products
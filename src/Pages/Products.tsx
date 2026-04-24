import Add from "@/Components/Cards/Add"
import Header from "@/Components/Nav/Header"
import ProductTable from "@/Components/Table/ProductTable"
import vectorw from '@/assets/Vectorw.png'
// import Search from "@/Components/Filter/Search"
// import Filter from "@/Components/Filter/Filter"

const Products = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header h1="Products & Inverntory"
          para="Manage Your product catalog and service offerings." />
        <div className="">
          <Add
            h1="Add Products"
            h2="Details"
            h3="Product & Service Details"
            h4="Product or Service Name"
            h5="Product or Service ID"
            h6="Price Details"
            h7="Max Price"
            h8="Add Product"
            h9="Min Price"
            para1="Manage your product catalog and service offerings."
            src1={vectorw}
            src2="" />
        </div>
        </div>
        
        <div className="mx-10">
          <h1 className="font-iceberg font-extralight text-[28px] leading-[100%] mt-8 mb-5">Product Details</h1>
          <ProductTable />
          </div>
        </div>
    </>
  )
}

export default Products
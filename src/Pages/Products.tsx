import Add from "@/Components/Cards/Add"
import Header from "@/Components/Nav/Header"
import vectorw from '@/assets/Vectorw.png'
import Search from "@/Components/Filter/Search"
import Filter from "@/Components/Filter/Filter"

const Products = () => {
  return (
    <div className="w-[1500px]">
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
      <section className="flex">
        <Search />
        <Filter icon="" para="" dropdownimg="" />
      </section>

    </div>
  )
}

export default Products
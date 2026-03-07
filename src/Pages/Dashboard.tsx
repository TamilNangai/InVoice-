import Header from "@/Components/Nav/Header"
import Cards from "@/Components/Cards/Cards"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src1 from '@/assets/Vectorw.png'
import src2 from '@/assets/Vector.png'
import Invoicetable from "@/Components/Table/Invoicetable"
import Search from "@/Components/Filter/Search"
import Filter from "@/Components/Filter/Filter"

// import Search from "@/Components/Filter/Search"
// import Filter from "@/Components/Filter/Filter"
// import circle from "@/assets/filter/circle.svg"
// import date from "@/assets/filter/date.svg"
// import filter from "@/assets/filter/filter.svg"
// import dropdown from "@/assets/filter/dropdown.svg"


function Dashboard() {
        return (

                <div className="w-[1500px]">
                        <div >
                                <Header h1="Dashboard"
                                        para=""
                                />
                        </div>
                        <div className="absolute right-10 top-4">
                                <Create popup1={Popup1}
                                        popup2={Popup2}
                                        popup3={Popup3}
                                        popup4={Popup4}
                                        src1={src1}
                                        src2={src2}

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
                                        h6="Create Invoice" />
                        </div>

                        <div className="w-[94%] max-h-40 gap-[2%] flex justify-center items-center mt-5 pl-16">
                                < Cards head="Total Revenue" symbol="$" amount={1000.00} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
                                < Cards head="Invoice Issued" amount={1200} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
                                < Cards head="Pending Payments" symbol="$" amount={1200.00} para="-- 25 Invoice Pending" cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" cardpara="text-[16px] text-[#000000]  " />
                                < Cards head="Clients" amount={2400} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />

                        </div>
                        <div className="w-[100%]">
                                
                                <Invoicetable />
                        </div>
                        {/* <Search/>
                        <Filter icon="" para="" dropdownimg=""/> */}
                </div>

        )
}
export default Dashboard;


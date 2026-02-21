type Headerprops = {
  h1: string
  h2: string
  h3: string
  src: string

}

import Create from "../Form/Create"
import Popup1 from "../../assets/Popup1.png"
import Popup2 from "../../assets/Popup2.png"
import Popup3 from "../../assets/Popup3.png"
import Popup4 from "../../assets/Popup4.png"
import src from '../../assets/Vector.png'
import vectorw from '../../assets/Vectorw.png'

function Header(props: Headerprops) {
  return (
    <div className="flex bg-[#DFDFDF99] h-20 w-full pl-10">
      <div className=" ">
        <h1 className="text-black font-iceberg text-2xl font-extralight">{props.h1}</h1>
        <p className="font-sanchez">{props.h2}</p>
      </div>
      <Create popup1={Popup1}
        popup2={Popup2}
        popup3={Popup3}
        popup4={Popup4}
        src1={vectorw}
        src2={src}

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
h6="Add Product"/>
    </div >
  )
}

export default Header

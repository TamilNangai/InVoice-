type Headerprops = {
  h1: string
  h2:string
}
import Buttons from "../Button/Buttons"
import src from "../../assets/Vectorp.png";
function Header(props: Headerprops) {
  return (
    <div className="flex bg-[#DFDFDF99] h-20 w-full pl-10">
      <div className=" ">
        <h1 className="text-black font-iceberg text-2xl font-extralight">{props.h1}</h1>
        <p className="font-sanchez">{props.h2}</p>
      </div>
      <div className="flex items-center justify-end w-full">
        <Buttons h1="Create Invoice" src={src} />
      </div>
    </div>
  )
}

export default Header

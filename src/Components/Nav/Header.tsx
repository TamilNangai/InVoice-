type Headerprops = {
  h1: string
  para: string
}

function Header(props: Headerprops) {
  return (
    <div className=" pl-10 h-20 flex flex-col items-start justify-center">
      <h1 className="text-black font-iceberg font-extralight xl:text-2xl md:text-2xl sm:text-xl">{props.h1}</h1>
      <p className="font-sanchez xl:text-lg md:text-sm sm:text-[14px]">{props.para}</p>
    </div>
  )
}

export default Header

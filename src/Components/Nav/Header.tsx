type Headerprops = {
  h1: string
  para: string
}

function Header(props: Headerprops) {
  return (
    <div className=" pl-10 h-20 flex flex-col items-start justify-center">
      <h1 className="text-black font-iceberg text-2xl font-extralight xl:text-3xl md:text-2xl sm:text-md">{props.h1}</h1>
      <p className="font-sanchez xl:text-xl md:text-sm sm:text-[15px]">{props.para}</p>
    </div>
  )
}

export default Header

type Headerprops = {
  h1: string
  para: string
}

function Header(props: Headerprops) {
  return (
    <div className="bg-[#DFDFDF99] pl-10 h-20">
      <h1 className="text-black font-iceberg text-2xl font-extralight absolute left-90 top-3">{props.h1}</h1>
      <p className="font-sanchez absolute top-11">{props.para}</p>
    </div>
  )
}

export default Header

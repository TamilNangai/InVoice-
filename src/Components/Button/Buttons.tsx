type Buttonprops={
  h1:string;
  src?:string;
}
function Button(props:Buttonprops) {
  return (
    <div className="">
      <button className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg border border-black">{props.h1}<img className="mt-2 pl-2" src={props.src}/></button>
    </div>
  )
}

export default Button

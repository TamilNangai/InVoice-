type ButtonsProps={
  h1:string;
  src:string;
}
function Buttons(props:ButtonsProps) {
  return (
    <div className="">
      <button className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"><img className="mt-2 pl-2" src={props.src}/>{props.h1}</button>
    </div>
  )
}

export default Buttons

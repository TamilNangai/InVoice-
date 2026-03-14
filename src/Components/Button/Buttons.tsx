// type ButtonsProps={
//   h1:string;
//   h2:string
//   src1?:string;
//   src2?:string
// }
// function Buttons(props:ButtonsProps) {
//   return (
//     <div className="flex">
//       <h1 className="mt-2 mr-3 font-iceberg text-xl">{props.h2}</h1>
//       <button className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"><img src={props.src2}/>{props.h1}<img className="mt-2 pl-2" src={props.src1}/></button>
//     </div>
//   )
// }

// export default Buttons


type ButtonsProps = {
  h1: string
  h2: string
  src1?: string
  src2?: string
  onClick?: () => void
}

function Buttons({ h1, h2, src1, src2, onClick }: ButtonsProps) {
  return (
    <div className="flex">
      <h1 className="mt-2 mr-3 font-iceberg text-xl">{h2}</h1>

      <button
        onClick={onClick}
        className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"
      >
        {src2 && <img src={src2} />}
        {h1}
        {src1 && <img className="mt-2 pl-2" src={src1} />}
      </button>

    </div>
  )
}

export default Buttons
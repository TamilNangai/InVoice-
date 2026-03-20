
// type ButtonsProps = {
//   h1: string
//   h2: string
//   src1?: string
//   src2?: string
//   onClick?: () => void
//   type?: "button" | "submit"
// }

// function Buttons({ h1, h2, src1, src2, onClick, type="button" }: ButtonsProps) {
//   return (
//     <div className="flex">
//       <h1 className="mt-2 mr-3 font-iceberg text-xl">{h2}</h1>

//       <button
//         onClick={onClick}
//         type={type}
//         className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"
//       >
//         {src2 && <img src={src2} />}
//         {h1}
//         {src1 && <img className="mt-2 pl-2" src={src1} />}
//       </button>

//     </div>
//   )
// }

// export default Buttons



import { useState } from "react"

type ButtonsProps = {
  h1: string
  h2: string
  src1?: string
  src2?: string
  onClick?: () => Promise<void> | void // support async functions
  type?: "button" | "submit"
}

function Buttons({ h1, h2, src1, src2, onClick, type = "button" }: ButtonsProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return // prevent multiple clicks
    if (!onClick) return

    setLoading(true)
    try {
      await onClick()
    } finally {
      setLoading(false) // re-enable button
    }
  }

  return (
    <div className="flex items-center">
      {h2 && <h1 className="mt-2 mr-3 font-iceberg text-xl">{h2}</h1>}

      <button
        onClick={handleClick}
        type={type}
        disabled={loading} // disable while loading
        className={`flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {src2 && <img src={src2} />}
        {loading ? "Saving..." : h1} {/* show progress */}
        {src1 && <img className="mt-2 pl-2" src={src1} />}
      </button>
    </div>
  )
}

export default Buttons
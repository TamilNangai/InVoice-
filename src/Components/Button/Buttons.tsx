
// import { useState } from "react"

// type ButtonsProps = {
//   h1: string
//   h2?: string
//   src1?: string
//   src2?: string
//   onClick?: () => Promise<void> | void
//   type?: "button" | "submit"
// }

// function Buttons({
//   h1,
//   h2,
//   src1,
//   src2,
//   onClick,
//   type = "button",
// }: ButtonsProps) {
//   const [loading, setLoading] = useState(false)

//   const handleClick = async () => {
//     if (loading || !onClick) return

//     setLoading(true)
//     try {
//       await onClick()
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">

//       {h2 && (
//         <h1 className="font-iceberg text-base sm:text-lg md:text-xl text-center sm:text-left">
//           {h2}
//         </h1>
//       )}

//       <button
//         onClick={handleClick}
//         type={type}
//         disabled={loading}
//         className={`flex items-center justify-center
//         w-full sm:w-auto
//         bg-[#136CEDCC]
//         font-iceberg
//         text-base sm:text-lg md:text-xl
//         text-white
//         px-4  md:px-6
//         py-2 sm:py-2
//         rounded-lg
//         whitespace-nowrap
//         ${loading
//             ? "opacity-50 cursor-not-allowed"
//             : "hover:bg-blue-400 active:scale-95"
//           }`}
//       >
//         {src2 && (
//           <img className="h-4 w-4 sm:h-5 sm:w-5 mr-2" src={src2} />
//         )}

//         {loading ? "Processing..." : h1}

//         {src1 && (
//           <img className="h-4 w-4 sm:h-5 sm:w-5 ml-2" src={src1} />
//         )}
//       </button>
//     </div>
//   )
// }

// export default Buttons


import { useState } from "react"

type ButtonVariant = "primary" | "secondary" | "outline"

type ButtonsProps = {
  h1: string
  h2?: string
  src1?: string
  src2?: string
  onClick?: () => Promise<void> | void
  type?: "button" | "submit"
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#136CEDCC] text-white hover:bg-blue-400 sm:text-xs sm:-mt-2",
  secondary: "bg-[#136CEDCC] text-white hover:bg-gray-300",
  outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
}

function Buttons({
  h1,
  h2,
  src1,
  src2,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonsProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading || !onClick) return

    setLoading(true)
    try {
      await onClick()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">

      {h2 && (
        <h1 className="font-iceberg text-base sm:text-lg md:text-xl text-center sm:text-left ">
          {h2}
        </h1>
      )}

      <button
        onClick={handleClick}
        type={type}
        disabled={loading}
        className={`
          flex items-center justify-center
          w-full sm:w-auto
          font-iceberg
          text-base sm:text-lg md:text-xl
          px-4 md:px-6
          py-2
          rounded-lg
          whitespace-nowrap
          transition
          ${variantStyles[variant]}
          ${loading ? "opacity-50 cursor-not-allowed" : "active:scale-95"}
        `}
      >
        {src2 && (
          <img className="h-4 w-4 sm:h-5 sm:w-5 mr-2" src={src2} />
        )}

        {loading ? "Processing..." : h1}

        {src1 && (
          <img className="h-4 w-4 sm:h-5 sm:w-5 ml-2" src={src1} />
        )}
      </button>
    </div>
  )
}

export default Buttons
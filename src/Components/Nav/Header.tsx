// type Headerprops = {
//   h1: string
//   para: string
//   onMenuClick?: () => void
// }

// function Header({ h1, para, onMenuClick }: Headerprops) {
//   return (
//     <div className="h-20 flex items-center px-4 md:px-10 gap-3">

//       <div className="flex flex-col items-start justify-center">
//         <h1 className="text-black font-iceberg text-xl md:text-2xl font-extralight">{h1}</h1>
//         <p className="font-sanchez text-sm md:text-base">{para}</p>
//       </div>
//     </div>
//   )
// }

// export default Header

type Headerprops = {
  h1: string
  para: string
  onMenuClick?: () => void
}

function Header({ h1, para }: Headerprops) {
  return (
    <div className="h-20 flex items-center px-4 md:px-10 gap-3">

      <div className="flex flex-col items-start justify-center">
        <h1 className="text-black font-iceberg text-xl sm:text-xl md:text-2xl font-extralight">
          {h1}
        </h1>

        <p className="font-sanchez text-sm sm:text-sm md:text-base">
          {para}
        </p>
      </div>

    </div>
  )
}

export default Header
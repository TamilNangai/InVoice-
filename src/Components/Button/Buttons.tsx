type ButtonsProps={
  h1:string;
  h2:string
  src?:string;
}
function Buttons(props:ButtonsProps) {
  return (
    <div className="flex">
      <h1 className="mt-2 mr-3 font-iceberg text-xl">{props.h2}</h1>
      <button className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg">{props.h1}<img className="mt-2 pl-2" src={props.src}/></button>
    </div>
  )
}

export default Buttons


// import React from "react";

// type ButtonProps = {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline";
//   onClick?: () => void;
// };

// const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {

//   const baseStyle =
//     "px-4 py-2 rounded-lg font-medium transition duration-200";

//   const variants = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700",
//     secondary: "bg-gray-500 text-white hover:bg-gray-600",
//     outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
//   };

//   return (
//     <button
//       className={${baseStyle} ${variants[variant]}}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

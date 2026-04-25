import { ReactNode, createContext, useContext } from "react";

type TableVariant = "grid" | "rows";

type TableContextType = {
    variant: TableVariant;
};

type TableProps = {
    children: ReactNode;
    variant?: TableVariant;
    className?: string;
};

type SectionProps = {
    children: ReactNode;
    className?: string;
};


const TableContext = createContext<TableContextType>({
    variant: "rows",
});



const Table = ({
    children,
    variant = "rows",
    className,
}: TableProps) => {
    return (
        <TableContext.Provider value={{ variant }}>
            <div className="overflow-x-auto no-scrollbar">
                <table className={`w-full border-collapse  ${className}`}>
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
};


const Header = ({ children }: SectionProps) => {
    return <thead>{children}</thead>;
};


const Body = ({ children, className }: SectionProps) => {
    return <tbody className={className}>{children}</tbody>;
};

const Row = ({ children }: SectionProps) => {
    const { variant } = useContext(TableContext);

    return (
        <tr className={variant === "rows" ? "border-b " : ""}>
            {children}
        </tr>
    );
};

// const Cell = ({ children }: SectionProps) => {
//     const { variant } = useContext(TableContext);

//     return (
//         <td
//             className={`p-3 font-sanchez  ${variant === "grid" ? "border border-black" : ""
//                 }`}
//         >
//             {children}
//         </td>
//     );
// };

// const HeadCell = ({ children }: SectionProps) => {
//     const { variant } = useContext(TableContext);

//     return (
//         <th
//             className={`py-3 text-center text-sm font-semibold ${variant === "grid" ? "border border-black" : ""
//                 }`}
//         >
//             {children}
//         </th>
//     );
// };

const Cell = ({ children, className }: SectionProps) => {
    const { variant } = useContext(TableContext);
    return (
        <td className={`px-2 py-2 lg:px-3 lg:py-3 font-sanchez text-md lg:text-lg  ${variant === "grid" ? " first:border-0 first:border-y border-l border-y border-black" : ""} ${className ?? ""}`}>
            {children}
        </td>
    );
};

const HeadCell = ({ children, className }: SectionProps) => {
    const { variant } = useContext(TableContext);
    return (
        <th className={`px-1 py-3 lg:px-3 lg:py-3 text-center text-xl lg:text-3xl rounded-2xl font-semibold ${variant === "grid" ? " first:border-0 border-l border-black" : ""} ${className ?? ""}`}>
            {children}
        </th>
    );
};


Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.HeadCell = HeadCell;

export default Table;
import React, { ReactNode, createContext, useContext } from "react";

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
            <div className="border border-black overflow-hidden">
                <table className={`w-full border-collapse ${className}`}>
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
};
 

const Header = ({ children }: SectionProps) => {
    return <thead>{children}</thead>;
};

// const Body = ({ children }: SectionProps) => {
//     return <tbody>{children}</tbody>;
// };
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

const Cell = ({ children }: SectionProps) => {
    const { variant } = useContext(TableContext);

    return (
        <td
            className={`p-4 font-sanchez  ${variant === "grid" ? "border border-black" : ""
                }`}
        >
            {children}
        </td>
    );
};

const HeadCell = ({ children }: SectionProps) => {
    const { variant } = useContext(TableContext);

    return (
        <th
            className={`p-5 text-center text-sm font-semibold ${variant === "grid" ? "border border-black" : ""
                }`}
        >
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
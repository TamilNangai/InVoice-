import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Radiogroup = ({selected,setSelected}:any) => {
    
    const [openDropdown, setOpenDropdown] = useState<"revenue" | null>(null);
    const [revenue, setRevenue] = useState("Overall Revenue"); // ✅ matches first option
    const options = [
        "Overall Revenue",
        "Internship Revenue",
        "Product Sales",
        "Service Invoice",
        "Other Invoice"
    ];

    return (
        <div className="w-1/2 lg:w-fit font-iceberg m-5 px-1 py-1 rounded border-2 border-[#000000] bg-[#136CED33]">
            {/* 📱 Mobile → Dropdown */}
            <div className="lg:hidden">
               

                <Dropdown
                    options={[
                        "Overall Revenue",
                        "Internship Revenue",
                        "Product Sales",
                        "Service Invoice",
                        "Other Invoice"
                    ]}
                    selected={revenue}
                    setSelected={setRevenue}
                    open={openDropdown === "revenue"}
                    setOpen={(val) => setOpenDropdown(val ? "revenue" : null)}
                />
            </div>

            {/* 💻 Desktop → Tabs */}
            <div className="hidden lg:flex items-center ">
                {options.map((label) => (
                    <label key={label} className="flex items-center whitespace-nowrap">
                        <input
                            type="radio"
                            name="radio"
                            value={label}
                            checked={selected === label}
                            onChange={() => setSelected(label)}
                            className="hidden"
                        />

                        <span
                            className={` px-3 py-2 text-sm sm:text-base cursor-pointer transition rounded-md
                                ${selected === label ? "bg-white text-black border border-black shadow-sm"
                                    : "text-gray-700 hover:bg-white/60"
                                } `}
                        >
                            {label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Radiogroup;

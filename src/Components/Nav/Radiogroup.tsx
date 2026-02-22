import { useState } from "react";

const Radiogroup = () => {
    const [selected, setSelected] = useState("Overall Revenue");
    const options = ["Overall Revenue", "Internship Revenue", "Product Sales", "Other Invoice"];
    return (
        <div className="flex justify-around items-center m-5  w-fit h-[44px] rounded-[4px] border-[2px] border-[#000000] bg-[#136CED33]">
            {options.map((label) => {
                return (
                    <label key={label} className=" flex justify-center items-center">
                        <input type="radio" name="radio" value={label} checked={selected === label} onChange={() => setSelected(label)} className="hidden" />
                        <span className={` px-[12px] gap-[10px] py-[8px] cursor-pointer transition ${selected === label ? "bg-white text-black border-black border rounded-[4px] my-3" : " text-gray-700 "}`}>{label}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default Radiogroup;

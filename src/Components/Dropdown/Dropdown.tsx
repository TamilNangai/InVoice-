import { useEffect, useRef } from "react";
import arrow from "@/assets/filter/arrow.png";

type Option = string | { label: string; value: string };

interface DropdownProps {
    options: Option[];
    selected: string;
    setSelected: (value: string) => void;
    icon?: string;
    open: boolean;
    setOpen: (value: boolean) => void;
}

const Dropdown = ({ options, selected, setSelected, icon, open, setOpen }: DropdownProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    // ✅ Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const getLabel = (option: Option) =>
        typeof option === "string" ? option : option.label;

    const getValue = (option: Option) =>
        typeof option === "string" ? option : option.value;

    const selectedLabel = (() => {
        const found = options.find((o) => getValue(o) === selected);
        return found ? getLabel(found) : getLabel(options[0]);
    })();

    return (
        <div ref={dropdownRef} className="relative w-full h-full rounded-md">
            <div
                onClick={() => setOpen(!open)}
                className="w-full h-full bg-transparent font-iceberg text-lg lg:text-lg rounded cursor-pointer flex justify-between p-3 items-center"
            >
                <div className="flex items-center gap-2">
                    {icon && <img src={icon} alt="icon" className="w-4 xl:w-5 h-auto  object-contain" />}
                    {selectedLabel}
                </div>
                <span>
                    {open
                        ? <img className="rotate-180 w-3  xl:w-4 h-auto" src={arrow} alt="Up" />
                        : <img className="w-3  xl:w-4 h-auto" src={arrow} alt="Down" />
                    }
                </span>
            </div>

            {open && (
                <ul className="absolute w-full bg-white border-2 border-black rounded-xl shadow-lg shadow-black z-10 overflow-hidden animate-fadeIn">
                    {options.map((option) => (
                        <li
                            key={getValue(option)}
                            onClick={() => { setSelected(getValue(option)); setOpen(false); }}
                            className={`px-3 py-2 font-iceberg text-sm lg:text-lg cursor-pointer flex items-center justify-between transition-colors duration-150 
                                ${selected === getValue(option)
                                    ? 'bg-blue-500 text-white font-medium'
                                    : 'hover:bg-blue-100 text-gray-800'
                                }`}
                        >
                            {getLabel(option)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
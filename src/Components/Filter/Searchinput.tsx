
type SearchInputProps = {
    icon: string;
    para: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchinput = ({ icon, para, value, onChange }: SearchInputProps) => {
    return (
        <div className="w-full h-[50px] px-4 flex items-center gap-3 border border-[#00000033] rounded-[6px]">

            <div className="flex items-center justify-center">
                <img src={icon} alt="search" className="w-4 h-4" />
            </div>

            <input type="text" placeholder={para} value={value} onChange={onChange} className="w-full outline-none bg-transparent text-[18px] font-iceberg" />

        </div>
    );
};

export default Searchinput;

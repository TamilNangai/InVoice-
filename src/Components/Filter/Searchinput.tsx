type Filter = { icon: string; para: string; }
const Searchinput = ({ para, icon }: Filter) => {
    return (
        <div className=' w-full h-[50px] p-4 flex justify-center items-center border border-[#00000033] rounded-[6px]'>
            <div className='w-1/5 flex justify-center items-center'><img src={icon} alt={icon} /></div>
            <input type="text" className='w-full flex justify-center items-center' placeholder={para} />
        </div>)
}
export default Searchinput
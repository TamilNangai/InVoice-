
type Filter = {
  icon:string;
  para: string;
  dropdownimg?: string;
}

const Filter = ({ para, dropdownimg, icon }: Filter) => {
  return (
    <div className=' w-full  h-[50px] p-4 flex justify-center items-center border border-[#00000033] rounded-[6px]'>
      <div className='w-1/5 flex justify-center items-center'><img src={icon} alt={icon} /></div>
      <p className='w-full flex justify-center items-center'>{para}</p>
      {dropdownimg && <div className='w-1/5 flex justify-center items-center'><img src={dropdownimg} alt={dropdownimg} /></div>}
    </div>
  )
}

export default Filter
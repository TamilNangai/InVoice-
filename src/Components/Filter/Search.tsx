import search from "@/assets/filter/search.svg"

const Search = () => {
  return (
    <div className='w-full flex justify-center items-center  h-[50px] rounded-[6px] text-[#FFFFFF80] border border-[#00000033]'>
      <div className='w-[20%] h-[50px]  flex justify-center items-center  text-[#1F1F1F]'><img className='w-[18px] h-[18px]' src={search} alt={search} /></div><input className='w-[80%]  flex justify-center items-center text-black' type="text" name="search" placeholder='Search by Invoice no or client Name' />
    </div>
  )
}

export default Search

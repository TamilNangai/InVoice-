import { useState } from "react"; 
import deslogo from '../../assets/sidebar/deslogo.png'
import expand from '../../assets/sidebar/expand.png'
import icon1 from '../../assets/sidebar/1.png'
import icon2 from '../../assets/sidebar/2.png'
import icon3 from '../../assets/sidebar/3.png'
import icon4 from '../../assets/sidebar/4.png'
import icon5 from '../../assets/sidebar/5.png'
import icon6 from '../../assets/sidebar/6.png'
import icon7 from '../../assets/sidebar/7.png'
import icon8 from '../../assets/sidebar/8.png'
import Avatar from '../../assets/sidebar/Avatar.png'
import footerarrow from '../../assets/sidebar/footerarror.png'
import { Link } from "react-router-dom";
const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <>
            <div className={`sticky  flex flex-col justify-between items-center h-screen rounded-tr-[16px] rounded-br-[16px] border-[2.5px] border-[#000000] bg-[#FFFFFF] shadow-[0px_16px_44px_rgba(0,0,0,0.07)] gap-6 transition-all duration-300 ${isExpanded ? "w-[276px]" : "w-[64px]"
                }`}>
                <div className='flex flex-col items-center justify-center'>
                    <header className=" text-2xl font-bold my-4 flex items-center justify-between">
                        {isExpanded && <img src={deslogo} alt={deslogo} />}
                        <button onClick={toggleSidebar}><img className={` ${isExpanded ? "" : "rotate-180"}`} src={expand} alt={expand} /></button>
                    </header>
                    <main>
                        <ul className='flex flex-col justify-center items-center'>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon1} alt={icon1} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Dashboard </p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/products" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon2} alt={icon2} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Products</p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/invoice-page" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon3} alt={icon3} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Invoice</p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/clients" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon4} alt={icon4} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Clients</p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-3 "><Link to="/reports" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon5} alt={icon5} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium  ${isExpanded ? "block" : "hidden"}`}>Reports</p></Link></li>
                        </ul>
                        <div className={`w-[270px] border hidden   ${isExpanded ? 'md:block' : 'hidden'} border-[#E2E8F0] p-0`}></div>
                        <ul className='flex flex-col justify-center items-center'>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/notifications" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon6} alt={icon6} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Notifications </p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/settings" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon7} alt={icon7} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Settings </p></Link></li>
                            <li className="w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] mb-2 "><Link to="/support" className=" flex justify-center items-center gap-[10px]"><img className='w-[20px] h-[20px] ' src={icon8} alt={icon8} /><p className={`w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center text-[#64748B] poppins-medium ${isExpanded ? "block" : "hidden"}`}>Support</p></Link></li>
                        </ul>
                    </main>
                </div>
                <footer className={`flex items-center justify-center gap-[12px]  w-[276px] h-[90px] border-[#E2E8F0] ${isExpanded ? 'border-t' : ''}`}>
                    <div className='w-[196px] h-[42px] flex items-center justify-center gap-[12px]'>
                        <section className='w-[40px] h-[40px] rounded-full'>
                            <img src={Avatar} alt={Avatar} />
                        </section>
                        <section className={`w-[144px] h-[42px] gap-[2px] ${isExpanded ? ' md:block' : 'hidden'}`}>
                            <p className='text-[#64748B] poppins-medium leading-[20px] text-[12px]'>Welcome back 👋</p>
                            <p className='text-[#081021] poppins-medium leading-[20px] text-[14px]'>Swetha S</p>
                        </section>
                    </div>
                    <div className={`${isExpanded ? 'block' : 'hidden'}`}>
                        <button className='w-[20px] h-[20px]'>
                            <img className='w-[6px] h-[10px]' src={footerarrow} alt={footerarrow} />
                        </button>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Sidebar
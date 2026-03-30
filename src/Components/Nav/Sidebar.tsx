import { useState } from "react";
import deslogo from '@/assets/sidebar/deslogo.png'
import expand from '@/assets/sidebar/expand.png'
import Icon1 from "@/assets/sidebar/icon/Icon1"
import Icon2 from "@/assets/sidebar/icon/Icon2"
import Icon3 from "@/assets/sidebar/icon/Icon3"
import Icon4 from "@/assets/sidebar/icon/Icon4"
import Icon5 from "@/assets/sidebar/icon/Icon5"
import Icon6 from "@/assets/sidebar/icon/Icon6"
import Icon7 from "@/assets/sidebar/icon/Icon7"
import Icon8 from "@/assets/sidebar/icon/Icon8"
import Avatar from "@/assets/sidebar/Avatar.png"
import footerarrow from "@/assets/sidebar/footerarror.png"
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const location = useLocation();

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            <div className={`sticky  flex flex-col justify-between items-center h-screen rounded-tr-[16px] rounded-br-[16px] border-[2.5px] border-[#000000] bg-[#FFFFFF] shadow-[0px_16px_44px_rgba(0,0,0,0.07)] gap-6 transition-all duration-300 ${isExpanded ? "w-[276px]" : "w-[64px]"
                }`}>
                <div className='flex flex-col items-center justify-center'>
                    <header className=" text-2xl font-bold my-4 flex items-center justify-between">
                        {isExpanded && <img className="w-[70%] h-auto" src={deslogo} alt={deslogo} />}
                        <button onClick={toggleSidebar}><img className={` ${isExpanded ? "" : "rotate-180"}`} src={expand} alt={expand} /></button>
                    </header>
                    <main>
                        <ul className='flex flex-col justify-center items-center'>
                            <li className=" mb-2 ">
                                <Link to="/" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className={`w-[20px] h-[20px] ${location.pathname === "/" ? " text-[#136CED]  " : ""} `} src={icon1} alt={icon1} /> */}
                                    <Icon1 className={`text-[#136CED] ${location.pathname === "/" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    {isExpanded && <p className='w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium '>Dashboard </p>}
                                </Link>
                            </li>
                            <li className=" mb-2 ">
                                <Link to="/products" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/products" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon2} alt={icon2} /> */}
                                    <Icon8 className={`text-[#136CED] ${location.pathname === "/products" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Products </p>}
                                </Link>
                            </li>
                            <li className=" mb-2 ">
                                <Link to="/invoice-page" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/invoice-page" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon3} alt={icon3} /> */}
                                    <Icon7 className={`text-[#136CED] ${location.pathname === "/invoice-page" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    
                                    
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Invoice</p>}
                                </Link>
                            </li>
                            <li className=" mb-2 ">
                                <Link to="/clients" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/clients" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon4} alt={icon4} /> */}
                                    <Icon2 className={`text-[#136CED] ${location.pathname === "/clients" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Clients</p>}
                                </Link>
                            </li>
                            <li className=" mb-3 ">
                                <Link to="/reports" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/reports" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon5} alt={icon5} /> */}
                                    <Icon3 className={`text-[#136CED] ${location.pathname === "/reports" ? " text-[#136CED]  " : "text-[#64748B]"}`} />

                                    
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium  ">Reports</p>}
                                </Link></li>
                        </ul>
                        <div className={`w-[270px] border hidden   ${isExpanded ? 'md:block' : 'hidden'} border-[#E2E8F0] p-0`}></div>
                        <ul className='flex flex-col justify-center items-center'>
                            <li className=" my-2">
                                <Link to="/notifications" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/notifications" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon6} alt={icon6} /> */}

                                    <Icon4 className={`text-[#136CED] ${location.pathname === "/notifications" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    
                                    
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Notifications </p>}
                                </Link></li>
                            <li className=" mb-2 ">
                                <Link to="/settings" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/settings" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon7} alt={icon7} /> */}
                                    <Icon5 className={`text-[#136CED] ${location.pathname === "/settings" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Settings </p>}
                                </Link></li>
                            <li className=" mb-2 ">
                                <Link to="/support" className={`w-[228px] h-[44px] rounded-[99px] px-[16px] py-[12px] gap-[12px] flex justify-center items-center  
                               ${location.pathname === "/support" ? "bg-[#136CED66] text-[#136CED]  " : "text-[#64748B] hover:bg-gray-100 "}   
                               ${isExpanded ? "w-[228px]" : "w-[50px] justify-center  "}`}>
                                    {/* <img className='w-[20px] h-[20px] ' src={icon8} alt={icon8} /> */}
                                    <Icon6 className={`text-[#136CED] ${location.pathname === "/support" ? " text-[#136CED]  " : "text-[#64748B]"}`} />
                                    {isExpanded && <p className="w-[164px] h-[20px] text-[14px] leading-[20px] flex justify-start items-center  poppins-medium ">Support</p>}
                                </Link></li>
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




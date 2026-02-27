import { useState } from "react";
import Buttons from "../Button/Buttons"
import { useNavigate } from "react-router-dom";

type CreateProps = {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: String
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    para5: string;
    para6: string;
    popup1: string;
    popup2: string;
    popup3: string;
    popup4: string;
    src1: string
    src2: string
}
function Create(props: CreateProps) {
    const [Show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="flex align-items-center justify-center">
            <div>
                <button onClick={() => setShow(true)} className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"><img className="mt-2 h-4 " src={props.src1} />{props.h6}</button>
            </div>
            {Show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <section className='  border-2 border-[#136CEDCC] w-[970px] h-[410px] rounded-lg bg-white'>
                        <h1 className="font-iceberg text-2xl pl-10 mt-5 h-12 font-extralight border-b border-black ">{props.h1}</h1>
                        <p className="text-center text-[17px] font-sanchez mt-3">{props.para1}</p>
                        <p className="text-center text-[17px] font-sanchez">{props.para6}</p>

                        <div className="flex space-x-8 items-center justify-center mt-4">
                            <section
                                className="border-2 border-black w-[200px] h-40 rounded-lg cursor-pointer"
                                onClick={() => navigate("/internship-invoice")}
                            >
                                Internship Invoice
                                <div className="flex items-center justify-center">
                                    <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup1} />
                                </div>
                                <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h2}</h1>
                                <p className="text-center font-sanchez text-[13px] px-1">{props.para2}</p>
                            </section>
                            <section onClick={() => navigate("/product-invoice")} className="border-2 border-black w-[200px] h-40 rounded-lg">
                                <div className="flex items-center justify-center">
                                    <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup2} />
                                </div>
                                <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h3}</h1>
                                <p className="text-center  font-sanchez text-[13px] px-1">{props.para3}</p>
                            </section>
                            <section onClick={() => navigate("/service-invoice")} className="border-2 border-black w-[200px] h-40 rounded-lg">
                                <div className="flex items-center justify-center">
                                    <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup3} />
                                </div>
                                <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h4}</h1>
                                <p className="text-center font-sanchez text-[13px] px-1">{props.para4}</p>
                            </section>
                            <section className="border-2 border-black w-[200px] h-40 rounded-lg">
                                <div className="flex items-center justify-center">
                                    <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup4} />
                                </div>
                                <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h5}</h1>
                                <p className="text-center font-sanchez text-[13px] px-1">{props.para5}</p>
                            </section>
                        </div>
                        <div className="flex gap-3 items-center justify-end mt-5 mr-10">
                            {/* < className="absolute bottom-5 -right-10 transform -translate-x-1/2"> */}
                            <button onClick={() => setShow(false)} className="flex font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-gray-400">Cancel</button>
                            <Buttons h1="Continue" h2="" src1={props.src2} src2="" />

                            {/* <div className="absolute right-1/3 mt-5"> */}
                            {/* </div> */}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}


export default Create

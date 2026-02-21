import { useState } from "react";
import Buttons from "../Button/Buttons"

type Createprops = {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6:string
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
src1:string
src2:string
}
function Create(props: Createprops) {
      const [ShowModel, setShowModel] = useState(false);

    return (
             <div className="absolute right-10 mt-4 ">
        <div onClick={() => setShowModel(true)} className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg"><img className="mt-2 h-4 " src={props.src1} />{props.h6}</div>
{ShowModel && (
   <div>
            <section className='border-2 border-[#136CEDCC] w-[970px] h-[400px] rounded-lg'>
                <h1 className="font-iceberg text-2xl pl-10 mt-5 h-12 font-extralight border-b border-black ">{props.h1}</h1>
                <p className="text-center text-[17px] font-sanchez mt-3">{props.para1}</p>
                <p className="text-center text-[17px] font-sanchez">{props.para6}</p>

                <div className="flex space-x-8 items-center justify-center mt-4">
                    <section className="border-2 border-black w-[200px] h-40 rounded-lg">
                        <div className="flex items-center justify-center">
                            <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup1} />
                        </div>
                        <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h2}</h1>
                        <p className="text-center font-sanchez text-[13px] px-1">{props.para2}</p>
                    </section>
                    <section className="border-2 border-black w-[200px] h-40 rounded-lg">
                        <div className="flex items-center justify-center">
                            <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup2} />
                        </div>
                        <h1 className="text-center text-[17px] font-iceberg mt-2">{props.h3}</h1>
                        <p className="text-center  font-sanchez text-[13px] px-1">{props.para3}</p>
                    </section>
                    <section className="border-2 border-black w-[200px] h-40 rounded-lg">
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
                <div className="absolute left-1/2 mt-5">
                    <Buttons h1="Continue" src={props.src2} />
                </div>
                <div className="flex items-end justify-end pr-56 mt-5">
                    <button onClick={() => setShowModel(false)} className="flex font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-gray-400">Cancel</button>
                </div>
            </section>
        </div>
)}
    </div>
    )
}


export default Create

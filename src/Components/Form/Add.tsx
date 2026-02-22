type Addprops = {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6:string
    h7:string
    para1: string
    src: string
}

import { useState } from "react"
import Buttons from "../Button/Buttons"
function Add(props: Addprops) {
    const [show, setShow] = useState(false)
    return (
        <section>
            <div>
                <button onClick={() => setShow(true)} className="flex bg-[#136CEDCC] font-iceberg text-2xl text-white px-5 py-2 rounded-lg">Create Product</button>
            </div>
            {show && (
                <div className="border border-black mx-[350px] mt-10 space-y-3 h-[470px]" >
                    <h1 className="font-iceberg text-xl pl-10 mt-3">{props.h1}</h1>
                    <p className="font-sanchez text-sm pl-10">{props.para1}</p>
                    <h6 className="font-iceberg text-md pl-10 border-b-2 border-gray-200">{props.h2}</h6>
                    <section className="pl-10 space-y-5">
                        <h1 className="font-iceberg mt-5">{props.h3}</h1>
                        <div className="">
                            <aside className="">
                                <label className="text-sm">{props.h4}</label>
                                <input className="flex border border-black rounded-[4px] mt-1 w-64" type="text"></input>
                            </aside>
                            <aside>
                                <label className="text-sm">{props.h5}</label>
                                <input className="flex border border-black rounded-[4px] mt-1 w-64" type="text"></input>
                            </aside>
                            <aside>
                                <label className="flex mb-1 text-sm">bvibdiihb</label>
                                <select className="border border-black rounded-[4px] w-64">
                                    <option>Product invoice</option>
                                    <option>Student invoice</option>
                                    <option>customer invoice</option>
                                </select>

                            </aside>
                        
                        <div>
                            <h1>{props.h6}</h1>
                            <aside>
                            <label>{props.h7}</label>
                            <input className="flex border border-black rounded-[4px] mt-1 w-64" type="number"></input>
                            </aside>
                        </div>
                        </div>
                        
                    </section>
                    <div className="flex gap-3 items-center justify-end mt-5 mr-10">
                            <button onClick={() => setShow(false)} className="flex font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-gray-400">Cancel</button>
                            <Buttons h1="Save Changes" src={props.src} />
                        </div>
                </div>

            )}
        </section>

    )
}

export default Add

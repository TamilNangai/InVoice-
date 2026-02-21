type Addprops = {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    para1: string
}
function Addpop(props: Addprops) {
    return (
        <div className="border border-[#136CEDCC] mx-[350px] mt-10" >
            <h1 className="font-iceberg text-xl pl-10 mt-3">{props.h1}</h1>
            <p className="font-sanchez text-sm pl-10">{props.para1}</p>
            <h6 className="font-iceberg text-md pl-10 border-b-2 border-gray-200">{props.h2}</h6>
            <section className="pl-10 space-y-6">
                <h1>{props.h3}</h1>
                <aside className=" ">
                    <label>{props.h4}</label>
                    <input className="flex border border-black" type="text"></input>
                </aside>
                <aside>
                    <label>{props.h5}</label>
                    <input className="flex border border-black" type="text"></input>
                </aside>
                <aside>
                    <section>
                        <option></option>
                        <option></option>
                        <option></option>
                    </section>
                </aside>
            </section>
        </div>
    )
}

export default Addpop

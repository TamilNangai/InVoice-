import { useState } from "react"
import { saveProduct } from "@/utils/SaveProduct"

type AddProps = {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
    h7: string
    h8: string
    para1: string
    src1: string
    src2: string
}

function Add(props: AddProps) {


    
    const [show, setShow] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSave = async () => {

        try {

            await saveProduct({
                name: formData.name,
                description: formData.description,
                category: formData.category,
                price: Number(formData.price)
            })
            window.location.reload()

            console.log("Product saved")

            alert("Product saved successfully!")

            setShow(false)

            setFormData({
                name: "",
                description: "",
                category: "",
                price: ""
            })

        } catch (error) {

            console.error("Error saving:", error)

            alert("Failed to save product")

        }

    }
    

    return (
        <section>

            <div>
                <button
                    onClick={() => setShow(true)}
                    className="flex bg-[#136CEDCC] font-iceberg text-xl text-white px-3 py-2 mt-1 rounded-lg"
                >
                    <img className="mt-2 h-4 mr-2" src={props.src1} />
                    {props.h8}
                </button>
            </div>

            {show && (
                <div className="fixed inset-0 translate-x-2/5 translate-y-1/4 z-50">

                    <div className="border border-black rounded-xl w-2/5 space-y-3 absolute right-72 h-[500px] bg-white">

                        <h1 className="font-iceberg text-2xl pl-10 mt-3">{props.h1}</h1>
                        <p className="font-sanchez text-sm pl-10">{props.para1}</p>

                        <h6 className="font-iceberg text-lg pl-12 border-b-2 border-gray-200">
                            {props.h2}
                        </h6>

                        <aside className="flex text-lg gap-36 pl-10 mt-5">
                            <h1 className="font-iceberg">{props.h3}</h1>
                            <h1 className="font-iceberg">{props.h6}</h1>
                        </aside>

                        <section className="flex gap-20 pl-10 font-sanchez">

                            <div className="gap-5 flex flex-col">

                                <aside>
                                    <label className="text-sm">{props.h4}</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
                                        type="text"
                                    />
                                </aside>

                                <aside>
                                    <label className="text-sm">{props.h5}</label>
                                    <input
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
                                        type="text"
                                    />
                                </aside>

                                <aside className="mb-5">
                                    <label className="flex mb-1 text-sm">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="border border-black rounded-[4px] w-64 h-9"
                                    >
                                        <option value="">Select Category</option>

                                        <option> RMS-DF_2025</option>
                                        <option>AMS-DF_2025</option>
                                        <option>IMS-DF_2025</option>
                                        <option>SV-DF_2025</option>
                                        <option> PS-DF_2025</option>
                                        <option>DMI-DF_2025</option>
                                    </select>
                                </aside>

                            </div>

                            <div className="gap-5 flex flex-col">

                                <aside>
                                    <label className="text-sm">{props.h7}</label>
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="flex border border-black rounded-[4px] mt-1 w-40 h-9"
                                        type="number"
                                    />
                                </aside>

                            </div>

                        </section>

                        <div className="flex gap-5 items-center justify-center">

                            <button
                                onClick={() => setShow(false)}
                                className="flex font-iceberg text-xl text-black px-5 py-1 rounded-lg border-2 border-gray-400"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSave}
                                className="bg-[#136CED] text-white px-5 py-2 rounded-lg font-iceberg"
                            >
                                Save Changes
                            </button>
                        </div>

                    </div>

                </div>
            )}

        </section>
    )
}

export default Add
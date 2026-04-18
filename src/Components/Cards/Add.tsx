// // import { useState } from "react"
// // import { saveProduct } from "@/utils/SaveProduct"

// // type AddProps = {
// //     h1: string
// //     h2: string
// //     h3: string
// //     h4: string
// //     h5: string
// //     h6: string
// //     h7: string
// //     h8: string
// //     h9: string
// //     para1: string
// //     src1: string
// //     src2: string
// // }

// // function Add(props: AddProps) {

// //     const [show, setShow] = useState(false)
// //     const [loading, setLoading] = useState(false)
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         description: "",
// //         category: "",
// //         price: ""
// //     })

// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //         const { name, value } = e.target
// //         setFormData((prev) => ({
// //             ...prev,
// //             [name]: value
// //         }))
// //     }

// //     // const handleSave = async () => {

// //     //     try {

// //     //         await saveProduct({
// //     //             name: formData.name,
// //     //             description: formData.description,
// //     //             category: formData.category,
// //     //             price: Number(formData.price)
// //     //         })
// //     //         window.location.reload()

// //     //         console.log("Product saved")

// //     //         alert("Product saved successfully!")

// //     //         setShow(false)

// //     //         setFormData({
// //     //             name: "",
// //     //             description: "",
// //     //             category: "",
// //     //             price: ""
// //     //         })

// //     //     } catch (error) {

// //     //         console.error("Error saving:", error)

// //     //         alert("Failed to save product")

// //     //     }

// //     // }
// //     const handleSave = async () => {
// //         if (loading) return
// //         setLoading(true)
// //         try {
// //             await saveProduct({
// //                 name: formData.name,
// //                 description: formData.description,
// //                 category: formData.category,
// //                 maxprice: Number(formData.price),
// //                 minprice: Number(formData.price)
// //             })
// //             window.location.reload()

// //             // console.log("Product saved")
// //             alert("Product saved successfully!")

// //             setFormData({
// //                 name: "",
// //                 description: "",
// //                 category: "",
// //                 price: ""
// //             })
// //             setShow(false)

// //         } catch (error) {
// //             // console.error("Error saving:", error)
// //             alert("Failed to save product")
// //         } finally {
// //             setLoading(false)
// //         }
// //     }

// //     return (
// //         <section>

// //             <div>
// //                 <button
// //                     onClick={() => setShow(true)}
// //                     className="flex bg-[#136CEDCC] font-iceberg text-xl text-white px-3 py-2 mt-1 rounded-lg"
// //                 >
// //                     <img className="mt-2 h-4 mr-2" src={props.src1} />
// //                     {props.h8}
// //                 </button>
// //             </div>

// //             {show && (
// //                 <div className="fixed inset-0 translate-x-2/5 translate-y-1/4 z-50">

// //                     <div className="border border-black rounded-xl w-2/5 space-y-3 absolute right-72 h-[500px] bg-white">

// //                         <h1 className="font-iceberg text-2xl pl-10 mt-3">{props.h1}</h1>
// //                         <p className="font-sanchez text-sm pl-10">{props.para1}</p>

// //                         <h6 className="font-iceberg text-lg pl-12 border-b-2 border-gray-200">
// //                             {props.h2}
// //                         </h6>

// //                         <aside className="flex text-lg gap-36 pl-10 mt-5">
// //                             <h1 className="font-iceberg">{props.h3}</h1>
// //                             <h1 className="font-iceberg">{props.h6}</h1>
// //                         </aside>

// //                         <section className="flex gap-20 pl-10 font-sanchez">

// //                             <div className="gap-5 flex flex-col">

// //                                 <aside>
// //                                     <label className="text-sm">{props.h4}</label>
// //                                     <input
// //                                         name="name"
// //                                         value={formData.name}
// //                                         onChange={handleChange}
// //                                         className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
// //                                         type="text"
// //                                     />
// //                                 </aside>

// //                                 <aside>
// //                                     <label className="text-sm">{props.h5}</label>
// //                                     <input
// //                                         name="description"
// //                                         value={formData.description}
// //                                         onChange={handleChange}
// //                                         className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
// //                                         type="text"
// //                                     />
// //                                 </aside>

// //                                 <aside className="mb-5">
// //                                     <label className="flex mb-1 text-sm">Category</label>
// //                                     <select
// //                                         name="category"
// //                                         value={formData.category}
// //                                         onChange={handleChange}
// //                                         className="border border-black rounded-[4px] w-64 h-9"
// //                                     >
// //                                         <option value="">Select Category</option>

// //                                         <option>Product</option>
// //                                         <option>Service</option>
// //                                         <option>Internship</option>

// //                                     </select>
// //                                 </aside>

// //                             </div>

// //                             <div className="gap-5 flex flex-col">

// //                                 <aside>
// //                                     <label className="text-sm">{props.h7}</label>
// //                                     <input
// //                                         name="maxprice"
// //                                         value={formData.price}
// //                                         onChange={handleChange}
// //                                         className="flex border border-black rounded-[4px] mt-1 w-40 h-9"
// //                                         type="number"
// //                                     />
// //                                 </aside>
// //                                 <aside>
// //                                     <label className="text-sm">{props.h9}</label>
// //                                     <input
// //                                         name="minprice"
// //                                         value={formData.price}
// //                                         onChange={handleChange}
// //                                         className="flex border border-black rounded-[4px] mt-1 w-40 h-9"
// //                                         type="number"
// //                                     />
// //                                 </aside>

// //                             </div>

// //                         </section>

// //                         <div className="flex gap-5 items-center justify-center">

// //                             <button
// //                                 onClick={() => setShow(false)}
// //                                 className="flex font-iceberg text-xl text-black px-5 py-1 rounded-lg border-2 border-gray-400"
// //                             >
// //                                 Cancel
// //                             </button>

// //                             {/* <button
// //                                 onClick={handleSave}
// //                                 className="bg-[#136CED] text-white px-5 py-2 rounded-lg font-iceberg"
// //                             >
// //                                 Save Changes
// //                             </button> */}

// //                             <button
// //                                 onClick={handleSave}
// //                                 disabled={loading}
// //                                 className={`bg-[#136CED] text-white px-5 py-2 rounded-lg font-iceberg ${loading ? "opacity-50 cursor-not-allowed" : ""
// //                                     }`}
// //                             >
// //                                 {loading ? "Saving..." : "Save Changes"}
// //                             </button>
// //                         </div>

// //                     </div>

// //                 </div>
// //             )}

// //         </section>
// //     )
// // }

// // export default Add










// import { useState } from "react"
// import { saveProduct } from "@/utils/SaveProduct"

// type AddProps = {
//     h1: string
//     h2: string
//     h3: string
//     h4: string
//     h5: string
//     h6: string
//     h7: string
//     h8: string
//     h9: string
//     para1: string
//     src1: string
//     src2: string
// }

// function Add(props: AddProps) {

//     const [show, setShow] = useState(false)
//     const [loading, setLoading] = useState(false)

//     const [formData, setFormData] = useState({
//         name: "",
//         description: "",
//         category: "",
//         minPrice: "",
//         maxPrice: ""
//     })

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     const handleSave = async () => {
//         if (loading) return
//         setLoading(true)
//         try {
//             await saveProduct({
//                 name: formData.name,
//                 description: formData.description,
//                 category: formData.category,
//                 maxprice: formData.maxPrice,
//                 minprice: formData.minPrice
//             })

//             window.location.reload()

//             alert("Product saved successfully!")

//             setFormData({
//                 name: "",
//                 description: "",
//                 category: "",
//                 minPrice: "",
//                 maxPrice: ""
//             })

//             setShow(false)

//         } catch (error) {
//             alert("Failed to save product")
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <section>

//             <div>
//                 <button
//                     onClick={() => setShow(true)}
//                     className="flex bg-[#136CEDCC] font-iceberg text-xl text-white px-3 py-2 mt-1 rounded-lg"
//                 >
//                     <img className="mt-2 h-4 mr-2" src={props.src1} />
//                     {props.h8}
//                 </button>
//             </div>

//             {show && (
//                 <div className="fixed inset-0 translate-x- translate-y-1/4 z-50">

//                     <div className="border border-black rounded-xl w-2/5 space-y-3 absolute right-72 h-[500px] bg-white">

//                         <h1 className="font-iceberg text-2xl pl-10 mt-3">{props.h1}</h1>
//                         <p className="font-sanchez text-sm pl-10">{props.para1}</p>

//                         <h6 className="font-iceberg text-lg pl-12 border-b-2 border-gray-200">
//                             {props.h2}
//                         </h6>

//                         <aside className="flex text-lg gap-36 pl-10 mt-5">
//                             <h1 className="font-iceberg">{props.h3}</h1>
//                             <h1 className="font-iceberg">{props.h6}</h1>
//                         </aside>

//                         <section className="flex gap-20 pl-10 font-sanchez">

//                             <div className="gap-5 flex flex-col">

//                                 <aside>
//                                     <label className="text-sm">{props.h4}</label>
//                                     <input
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
//                                         type="text"
//                                     />
//                                 </aside>

//                                 <aside>
//                                     <label className="text-sm">{props.h5}</label>
//                                     <input
//                                         name="description"
//                                         value={formData.description}
//                                         onChange={handleChange}
//                                         className="flex border border-black rounded-[4px] mt-1 w-64 h-9"
//                                         type="text"
//                                     />
//                                 </aside>

//                                 <aside className="mb-5">
//                                     <label className="flex mb-1 text-sm">Category</label>
//                                     <select
//                                         name="category"
//                                         value={formData.category}
//                                         onChange={handleChange}
//                                         className="border border-black rounded-[4px] w-64 h-9"
//                                     >
//                                         <option value="">Select Category</option>

//                                         <option>Product</option>
//                                         <option>Service</option>
//                                         <option>Internship</option>

//                                     </select>
//                                 </aside>

//                             </div>

//                             <div className="gap-5 flex flex-col">

//                                 <aside>
//                                     <label className="text-sm">{props.h7}</label>
//                                     <input
//                                         name="maxPrice"
//                                         value={formData.maxPrice}
//                                         onChange={handleChange}
//                                         className="flex border border-black rounded-[4px] mt-1 w-40 h-9"
//                                     />
//                                 </aside>

//                                 <aside>
//                                     <label className="text-sm">{props.h9}</label>
//                                     <input
//                                         name="minPrice"
//                                         value={formData.minPrice}
//                                         onChange={handleChange}
//                                         className="flex border border-black rounded-[4px] mt-1 w-40 h-9"
//                                     />
//                                 </aside>

//                             </div>

//                         </section>

//                         <div className="flex gap-5 items-center justify-center">

//                             <button
//                                 onClick={() => setShow(false)}
//                                 className="flex font-iceberg text-xl text-black px-5 py-1 rounded-lg border-2 border-gray-400"
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 onClick={handleSave}
//                                 disabled={loading}
//                                 className={`bg-[#136CED] text-white px-5 py-2 rounded-lg font-iceberg ${loading ? "opacity-50 cursor-not-allowed" : ""
//                                     }`}
//                             >
//                                 {loading ? "Saving..." : "Save Changes"}
//                             </button>
//                         </div>

//                     </div>

//                 </div>
//             )}

//         </section>
//     )
// }

// export default Add



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
    h9: string
    para1: string
    src1: string
    src2: string
}

function Add(props: AddProps) {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        minPrice: "",
        maxPrice: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSave = async () => {
        if (loading) return
        setLoading(true)
        try {
            await saveProduct({
                name: formData.name,
                description: formData.description,
                category: formData.category,
                maxprice: formData.maxPrice,
                minprice: formData.minPrice
            })

            window.location.reload()

            alert("Product saved successfully!")

            setFormData({
                name: "",
                description: "",
                category: "",
                minPrice: "",
                maxPrice: ""
            })

            setShow(false)

        } catch (error) {
            alert("Failed to save product")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>

            <div>
                <button
                    onClick={() => setShow(true)}
                    className="flex bg-[#136CEDCC] font-iceberg text-xl mt-1 rounded-lg  sm:text-sm md:text-sm xl:text-xl xs:text-[5px]
        text-white
        px-4 md:px-2 md:py-2
        py-2 sm:py-2 sm:px-2"
                >
                    <img className="xl:mt-1.5 md:mt-1.5 xl:h-4 md:h-2 sm:h-3 md:mr-1 xl:mr-1.5 sm:mt-1 sm:mr-1.5" src={props.src1} />
                    {props.h8}
                </button>
            </div>

            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-5 space-y-4">

                        <h1 className="font-iceberg text-xl md:text-2xl">{props.h1}</h1>
                        <p className="font-sanchez text-sm">{props.para1}</p>

                        <h6 className="font-iceberg text-lg border-b pb-1">
                            {props.h2}
                        </h6>

                        {/* Headings */}
                        <div className="flex justify-between text-sm md:text-lg">
                            <h1 className="font-iceberg">{props.h3}</h1>
                            <h1 className="font-iceberg">{props.h6}</h1>
                        </div>

                        {/* Form Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sanchez">

                            {/* Left Side */}
                            <div className="space-y-4">

                                <div>
                                    <label className="text-sm">{props.h4}</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">{props.h5}</label>
                                    <input
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm mb-1 block">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full border border-black rounded h-9 px-2"
                                    >
                                        <option value="">Select Category</option>
                                        <option>Product</option>
                                        <option>Service</option>
                                        <option>Internship</option>
                                    </select>
                                </div>

                            </div>

                            {/* Right Side */}
                            <div className="space-y-4">

                                <div>
                                    <label className="text-sm">{props.h7}</label>
                                    <input
                                        name="maxPrice"
                                        value={formData.maxPrice}
                                        onChange={handleChange}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">{props.h9}</label>
                                    <input
                                        name="minPrice"
                                        value={formData.minPrice}
                                        onChange={handleChange}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-3 justify-center pt-3">

                            <button
                                onClick={() => setShow(false)}
                                className="font-iceberg text-lg border border-gray-400 px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSave}
                                disabled={loading}
                                className={`bg-[#136CED] text-white px-5 py-2 rounded-lg font-iceberg ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </section>
    )
}

export default Add
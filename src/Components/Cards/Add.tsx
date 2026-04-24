

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

//     // ✅ ADD THIS (VALIDATION + SAVE FIX)
//     const handleSave = async () => {

//         const isEmpty =
//             !formData.name.trim() &&
//             !formData.description.trim() &&
//             !formData.category &&
//             !formData.minPrice &&
//             !formData.maxPrice

//         if (isEmpty) {
//             alert("Please enter product details")
//             return // 🚫 stop saving
//         }

//         if (loading) return
//         setLoading(true)

//         try {
//             await saveProduct({
//                 name: formData.name.trim(),
//                 description: formData.description.trim(),
//                 category: formData.category,
//                 maxprice: formData.maxPrice || "",
//                 minprice: formData.minPrice || ""
//             })

//             alert("Product saved successfully!")

//             setFormData({
//                 name: "",
//                 description: "",
//                 category: "",
//                 minPrice: "",
//                 maxPrice: ""
//             })

//             setShow(false)

//             // optional: refresh
//             window.location.reload()

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
//                     className="flex bg-[#136CEDCC] font-iceberg xl:text-xl sm:text-[14px] mt-1 rounded-lg
//         text-white xl:px-4 xl:py-2 sm:py-1 sm:px-2"
//                 >
//                     <img className="xl:h-4 xl:mr-2 xl:mt-1 sm:h-3 sm:mr-2 sm:mt-2" src={props.src1} />
//                     {props.h8}
//                 </button>
//             </div>

//             {show && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-auto">

//                     <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-5 space-y-4 border-2 border-[#136CEDCC]">

//                         <h1 className="font-iceberg text-xl md:text-2xl">{props.h1}</h1>
//                         <p className="font-sanchez text-sm">{props.para1}</p>

//                         <h6 className="font-iceberg text-lg border-b pb-1">
//                             {props.h2}
//                         </h6>

//                         <div className="flex justify-between text-sm md:text-lg">
//                             <h1 className="font-iceberg">{props.h3}</h1>
//                             <h1 className="font-iceberg">{props.h6}</h1>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sanchez">

//                             <div className="space-y-4">

//                                 <div>
//                                     <label className="text-sm">{props.h4}</label>
//                                     <input
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="w-full border border-black rounded mt-1 h-9 px-2"
//                                         type="text"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="text-sm">{props.h5}</label>
//                                     <input
//                                         name="description"
//                                         value={formData.description}
//                                         onChange={handleChange}
//                                         className="w-full border border-black rounded mt-1 h-9 px-2"
//                                         type="text"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="text-sm mb-1 block">Category</label>
//                                     <select
//                                         name="category"
//                                         value={formData.category}
//                                         onChange={handleChange}
//                                         className="w-full border border-black rounded h-9 px-2"
//                                     >
//                                         <option value="">Select Category</option>
//                                         <option>Product</option>
//                                         <option>Service</option>
//                                         <option>Internship</option>
//                                     </select>
//                                 </div>

//                             </div>

//                             <div className="space-y-4">

//                                 <div>
//                                     <label className="text-sm">{props.h7}</label>
//                                     <input
//                                         name="maxPrice"
//                                         value={formData.maxPrice}
//                                         onChange={handleChange}
//                                         type="number"
//                                         className="w-full border border-black rounded mt-1 h-9 px-2"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="text-sm">{props.h9}</label>
//                                     <input
//                                         name="minPrice"
//                                         value={formData.minPrice}
//                                         onChange={handleChange}
//                                         type="number"
//                                         className="w-full border border-black rounded mt-1 h-9 px-2"
//                                     />
//                                 </div>

//                             </div>

//                         </div>

//                         <div className="flex flex-col md:flex-row gap-3 justify-center pt-3">

//                             <button
//                                 onClick={() => setShow(false)}
//                                 className="font-iceberg text-lg border border-gray-400 px-4 py-2 rounded-lg"
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 onClick={handleSave}
//                                 disabled={loading}
//                                 className={`bg-[#136CED] text-white px-3 py-2 rounded-lg font-iceberg ${loading ? "opacity-50 cursor-not-allowed" : ""
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
    onProductAdded?: () => void
}

function Add(props: AddProps) {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        minPrice: "",
        maxPrice: ""
    })

    const handleSave = async () => {

        if (loading) return

        setError("") // clear previous error

        const name = formData.name.trim()
        const description = formData.description.trim()

        if (!name || !description) {
            setError(" Enter the Product/service Name and Description")
            return
        }

        if (!formData.minPrice || !formData.maxPrice) {
            setError("Prices are required")
            return
        }

        const min = Number(formData.minPrice)
        const max = Number(formData.maxPrice)

        if (isNaN(min) || isNaN(max)) {
            setError("Invalid price values")
            return
        }

        if (min < 0 || max < 0) {
            setError("Price cannot be negative")
            return
        }

        if (min > max) {
            setError("Minimum price cannot be greater than maximum price")
            return
        }

        setLoading(true)

        try {
            await saveProduct({
                name,
                description,
                category: formData.category,
                minprice: min,
                maxprice: max
            })

            // reset form
            setFormData({
                name: "",
                description: "",
                category: "",
                minPrice: "",
                maxPrice: ""
            })

            setShow(false)

            props.onProductAdded?.()

        } catch (err) {
            console.error(err)
            setError("Failed to save product")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section>

            {/* Open Button */}
                 <div>
                    <button
                        onClick={() => setShow(true)}
                        className="flex items-center bg-[#136CEDCC] font-iceberg 
                        text-base sm:text-lg md:text-xl
                        mt-1 rounded-lg text-white 
                        px-3 py-2 sm:px-4 sm:py-2.5"
                    >
                        <img
                            className="h-5 w-5 mr-2"
                            src={props.src1}
                            alt="icon"
                        />
                        {props.h8}
                    </button>
                </div>

            {/* Modal */}
            {show && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40"
                    onClick={() => !loading && setShow(false)}
                >

                    <form
                        onClick={(e) => e.stopPropagation()}
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSave()
                        }}
                        className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-5 space-y-4 border-2 border-[#136CEDCC]"
                    >

                        <h1 className="font-iceberg text-xl md:text-2xl">{props.h1}</h1>
                        <p className="font-sanchez text-sm">{props.para1}</p>

                        <h6 className="font-iceberg text-lg border-b pb-1">
                            {props.h2}
                        </h6>
                        <div className="grid grid-cols-2 gap-5 font-sanchez text-sm md:text-base">
                        
                            <h1 className="font-iceberg">{props.h3}</h1>
                            <h1 className="font-iceberg">{props.h6}</h1>
                        

                        

                            {/* LEFT */}
                            <div className="space-y-4">

                                <div>
                                    <label className="text-sm">{props.h4}</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value })
                                            setError("")
                                        }}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">{props.h5}</label>
                                    <input
                                        name="description"
                                        value={formData.description}
                                        onChange={(e) => {
                                            setFormData({ ...formData, description: e.target.value })
                                            setError("")
                                        }}
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm mb-1 block">Category</label>
                                    <select
                                        required
                                        name="category"
                                        value={formData.category}
                                        onChange={(e) => {
                                            setFormData({ ...formData, category: e.target.value })
                                            setError("")
                                        }}
                                        className="w-full border border-black rounded h-9 px-2"
                                    >
                                        <option value="">Select Category</option>
                                        <option>Product</option>
                                        <option>Service</option>
                                        <option>Internship</option>
                                    </select>
                                </div>

                            </div>

                            {/* RIGHT */}
                            <div className="space-y-4">

                                <div>
                                    <label className="text-sm">{props.h9}</label>
                                    <input
                                        name="minPrice"
                                        value={formData.minPrice}
                                        onChange={(e) => {
                                            setFormData({ ...formData, minPrice: e.target.value })
                                            setError("")
                                        }}
                                        type="number"
                                        min="0"
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">{props.h7}</label>
                                    <input
                                        name="maxPrice"
                                        value={formData.maxPrice}
                                        onChange={(e) => {
                                            setFormData({ ...formData, maxPrice: e.target.value })
                                            setError("")
                                        }}
                                        type="number"
                                        min="0"
                                        className="w-full border border-black rounded mt-1 h-9 px-2"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* ERROR MESSAGE */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        {/* ACTIONS */}
                        <div className="flex flex-row flex-wrap gap-8 justify-center pt-3 text-xs sm:text-sm md:text-base">

                            <button
                                type="button"
                                disabled={loading}
                                onClick={() => setShow(false)}
                                className="font-iceberg text-lg border border-gray-400 px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-[#136CED] text-white px-3 py-2 rounded-lg font-iceberg ${
                                    loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>

                        </div>

                    </form>
                </div>
            )}

        </section>
    )
}

export default Add
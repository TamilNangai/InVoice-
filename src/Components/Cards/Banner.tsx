type Bannerprops = {
  h1: string
  para1: string
  h2: string
  para2: string
  h3: string
  para3: string
  h4: string
  para4: string
  h5: string
  h6: string
  h7: string
  src1: string
  src2: string
  src3: string
}

function Banner(props: Bannerprops) {
  return (
    <section >
      <div className="border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] mx-10 rounded-xl p-6">
        <h1 className="text-2xl font-iceberg">{props.h1}</h1>
        <p className="font-sanchez">{props.para1}</p>
        <div className="space-y-6 mt-5 ">

          <aside className=" flex border-2 border-black mx-10 h-20 rounded-lg p-6">
            <img className="w-8 h-7" src={props.src1} />

            <div className="space-y-1 -mt-3 pl-5">
              <h1 className="text-xl font-iceberg">{props.h2}</h1>
              <p className="text-md font-sanchez">{props.para2}</p>
            </div>
            <div className="absolute right-80 border-2 border-black w-44 h-10 rounded-lg -mt-1">
              <h1 className="font-sanchez m-2"> {props.h5}</h1>
            </div>
            <div className="absolute right-32">
              <label className="flex items-center space-x-3 cursor-pointer">
                <span className="font-sanchez">Enable</span>
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 rounded-full 
              peer-checked:bg-green-500 
              relative 
              after:content-[''] after:absolute 
              after:top-1 after:left-1 
              after:bg-white after:rounded-full 
              after:h-4 after:w-4 
              after:transition-all 
              peer-checked:after:translate-x-6">
                </div>

              </label>
            </div>
          </aside>

          <aside className=" flex border-2 border-black mx-10 h-20 rounded-lg p-6">
            <img className="w-8 h-7" src={props.src2} />

            <div className="space-y-1 -mt-3 pl-5">
              <h1 className="text-xl font-iceberg">{props.h3}</h1>
              <p className="text-md font-sanchez">{props.para3}</p>
            </div>
            <div className="absolute right-80 border-2 border-black w-44 h-10 rounded-lg -mt-1">
              <h1 className="font-sanchez m-2"> {props.h5}</h1>

            </div>
            <div className="absolute right-32">
              <label className="flex items-center space-x-3 cursor-pointer">
                <span className="font-sanchez">Enable</span>
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 rounded-full 
              peer-checked:bg-green-500 
              relative 
              after:content-[''] after:absolute 
              after:top-1 after:left-1 
              after:bg-white after:rounded-full 
              after:h-4 after:w-4 
              after:transition-all 
              peer-checked:after:translate-x-6">
                </div>

              </label>
            </div>
          </aside>

          <aside className=" flex border-2 border-black mx-10 h-20 rounded-lg p-6">
            <img className="w-8 h-7" src={props.src3} />

            <div className="space-y-1 -mt-3 pl-5">
              <h1 className="text-xl font-iceberg">{props.h4}</h1>
              <p className="text-md font-sanchez">{props.para4}</p>
            </div>
            <div className="absolute right-80 border-2 border-black w-44 h-10 rounded-lg -mt-1">
              <h1 className="font-sanchez m-2"> {props.h5}</h1>
            </div>
            <div className="absolute right-32">
              <label className="flex items-center space-x-3 cursor-pointer">
                <span className="font-sanchez">Enable</span>
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 rounded-full 
              peer-checked:bg-green-500 
              relative 
              after:content-[''] after:absolute 
              after:top-1 after:left-1 
              after:bg-white after:rounded-full 
              after:h-4 after:w-4 
              after:transition-all 
              peer-checked:after:translate-x-6">
                </div>

              </label>
            </div>
          </aside>



        </div>
      </div>
    </section>
  )
}

export default Banner

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
}

function Banner(props: Bannerprops) {
  return (
    <section>
      <div className="border-2 border-black mx-10 rounded-lg p-6">
        <h1 className="text-2xl font-iceberg">{props.h1}</h1>
        <p className="font-sanchez">{props.para1}</p>
        <div className="space-y-6 mt-5">
          <aside className="border-2 border-black mx-10 rounded-lg p-6">
            <h1 className="text-xl font-iceberg">{props.h2}</h1>
            <p className="text-md font-sanchez">{props.para2}</p>
            <div>{props.h5}</div>
          </aside>
          <aside className="border-2 border-black mx-10 rounded-lg p-6">
            <h1 className="text-xl font-iceberg">{props.h3}</h1>
            <p className="text-md font-sanchez">{props.para3}</p>
            <div>{props.h5}</div>
          </aside >
          <aside className="border-2 border-black mx-10 rounded-lg p-6">
            <h1 className="text-xl font-iceberg">{props.h4}</h1>
            <p className="text-md font-sanchez">{props.para4}</p>
            <div>{props.h5}</div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Banner

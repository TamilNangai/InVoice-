
import { useState } from "react";
import Buttons from "../Button/Buttons";
import { useNavigate } from "react-router-dom";

type CreateProps = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
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
  src1: string;
  src2: string;
};

function Create(props: CreateProps) {
  const [show, setShow] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRoute) {
      navigate(selectedRoute);
      setShow(false);
    } else {
      alert("Please select a card");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setShow(true)}
        className="
        flex items-center justify-center
        w-full sm:w-auto
        bg-[#136CEDCC]
        font-iceberg
        text-base sm:text-lg md:text-xl
        text-white
        px-4 sm:px-4 md:px-6
        py-2 sm:py-2
        rounded-lg
        whitespace-nowrap
      "
      >
        <img className="xl:mt-2  h-4 xl:mr-2 md:mr-2 sm:mr-1" src={props.src1} />
        {props.h6}
      </button>
      {show && (
        <div className=" fixed bg-black/20 inset-0 flex justify-center  items-center z-50">
          <section className="border-2 border-[#136CEDCC] w-8/12 h-fit p-5 rounded-lg bg-white">

            <h1 className="font-iceberg xl:text-[28px] md:text-[22px] sm:text-[22px]  mt-5 h-12 font-extralight border-b border-black">
              {props.h1}
            </h1>

            <p className="text-center xl:text-[18px] md:text-[14px] sm:text-[15px] font-sanchez mt-3">
              {props.para1}
            </p>
            <p className="text-center xl:text-[18px] md:text-[14px] sm:text-[15px] font-sanchez">
              {props.para6}
            </p>


            <div className="flex sm:space-x-4 md:space-x-3 xl:space-x-5 items-center justify-center mt-4">

              <section
                onClick={() => setSelectedRoute("/internship-invoice")}
                className={`border-2 w-1/2 h-fit pb-4  rounded-lg cursor-pointer
                ${selectedRoute === "/internship-invoice" ? "border-blue-500 bg-blue-50" : "border-black"}`}
              >
                <div className="flex items-center justify-center">
                  <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup1} />
                </div>
                <h1 className="text-center sm:text-[12px] md:text-[12px] lg:text-[17px] font-iceberg mt-2">{props.h2}</h1>
                <p className="text-center font-sanchez xl:text-[15px] md:text-[10px] sm:text-[10px] px-1">{props.para2}</p>
              </section>

              <section
                onClick={() => setSelectedRoute("/product-invoice")}
                className={`border-2 w-1/2 h-auto pb-4  rounded-lg cursor-pointer
                ${selectedRoute === "/product-invoice" ? "border-blue-500 bg-blue-50" : "border-black"}`}
              >
                <div className="flex items-center justify-center">
                  <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup2} />
                </div>
                <h1 className="text-center sm:text-[12px] md:text-[12px] lg:text-[17px] font-iceberg mt-2">{props.h3}</h1>
                <p className="text-center font-sanchez xl:text-[15px] md:text-[10px] sm:text-[10px] px-1">{props.para3}</p>
              </section>

              <section
                onClick={() => setSelectedRoute("/service-invoice")}
                className={`border-2 w-1/2 h-fit pb-4  rounded-lg cursor-pointer 
                ${selectedRoute === "/service-invoice" ? "border-blue-500 bg-blue-50" : "border-black"}`}
              >
                <div className="flex items-center justify-center">
                  <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup3} />
                </div>
                <h1 className="text-center sm:text-[12px] md:text-[12px] lg:text-[17px] font-iceberg mt-2">{props.h4}</h1>
                <p className="text-center font-sanchez xl:text-[15px] md:text-[10px] sm:text-[10px] px-1">{props.para4}</p>
              </section>

              <section
                onClick={() => setSelectedRoute("/other-invoice")}
                className={`border-2 w-1/2 h-fit pb-4  rounded-lg cursor-pointer
                ${selectedRoute === "/other-invoice" ? "border-blue-500 bg-blue-50" : "border-black"}`}
              >
                <div className="flex items-center justify-center">
                  <img className="border border-black rounded-xl w-12 h-12 mt-4" src={props.popup4} />
                </div>
                <h1 className="text-center sm:text-[12px] md:text-[12px] lg:text-[17px] font-iceberg mt-2">{props.h5}</h1>
                <p className="text-center font-sanchez xl:text-[15px] md:text-[10px] sm:text-[10px] px-1">{props.para5}</p>
              </section>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 items-center justify-end mt-5 mr-10">
              <button
                onClick={() => setShow(false)}
                className="flex font-iceberg text-2xl  rounded-lg border-2 border-gray-400 sm:text-lg md:text-xl
        text-black
        px-4 sm:px-4 md:px-6
        py-2 sm:py-2"
              >
                Cancel
              </button>

              <div onClick={handleContinue}>
                <Buttons h1="Continue" h2="" src1={props.src2} src2="" />
              </div>
            </div>

          </section>
        </div>
      )}
    </div>
  );
}

export default Create;
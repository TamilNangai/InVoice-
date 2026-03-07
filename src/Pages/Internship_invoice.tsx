// import Bill from '@/Components/Invoice/Bill'
// import Header from "@/Components/Nav/Header"
// import Feeform from "@/Components/Form/Feeform"
// import Programform from "@/Components/Form/Programform"
// import Stdform from "@/Components/Form/Stdform"
// import Buttons from '@/Components/Button/Buttons'
// import vectora from "@/assets/Vectora.png"
// import Priceform from '@/Components/Form/Priceform'

// const Internship_invoice = () => {
//   return (
//     <div className="w-[1500px]">
//       <div >
//         <Header h1="New Internship Invoice"
//           para="#INV-2026-001" />
//         <div className="absolute right-10 top-4">
//           <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1='' />
//         </div>
//       </div>
//       <section className="grid grid-cols-2 grid-rows-12 h-screen">
//         <div className='col-start-1 col-end-2 row-start-1 row-end-2'>
//           <Stdform studentName='Student Name' college='College / Institution' phone='Phone Number' email='Email Address' />
//         </div>
//         <div className='col-start-1 col-end-2 row-start-3 row-end-5'>
//           <Programform />
//         </div>
//         <div className='col-start-1 col-end-1 row-start-6 row-end-8'>
//           <Feeform />
//         </div>
//         <div className='col-start-1 col-end-1 row-start-9 row-end-12'>
//           <Priceform total="110000"
//             due="10000"
//             paid="100000"
//             duedate="2026-03-10"
//             paymentMethod="UPI" />
//         </div>
//         <div className='col-start-2 col-end-3 row-start-1 row-end-13'>
//           <Bill button={<Buttons src1='' src2='' h1="Internship Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxhead='Program Enrolled' boxprogram='Web Development Internship' batch='Batch: Summer 2024- A' duration='Duration: Jan 01 -Feb 25,2026' detailhead='Program Enrolled' head11="Training Program Fee" head12="Core Curriculum Access and mentorship" amount1={500.00} head21="Internship Administrative Fee" head22="Project allocation and assessment" amount2={250.00} head31='Certification Issuance' head32='Digital and physical certificate' amount3={50} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects." />
//         </div>
//       </section>

//     </div>
//   )
// }
// export default Internship_invoice

import Bill from '@/Components/Invoice/Bill'
import Header from "@/Components/Nav/Header"
import Feeform from "@/Components/Form/Feeform"
import Programform from "@/Components/Form/Programform"
import Stdform from "@/Components/Form/Stdform"
import Buttons from '@/Components/Button/Buttons'
import vectora from "@/assets/Vectora.png"
import Priceform from '@/Components/Form/Priceform'
const Internship_invoice = () => {
  return (
    <div className="w-[1500px]">

      <div>
        <Header
          h1="New Internship Invoice"
          para="#INV-2026-001"
        />

        <div className="absolute right-10 top-4">
          <Buttons
            h1="Issue Invoice"
            h2="Save Draft"
            src2={vectora}
            src1=""
          />
        </div>
      </div>

      <section className="grid grid-cols-2 grid-rows-12 min-h-screen gap-4">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <Stdform
            studentName="Student Name"
            college="College / Institution"
            phone="Phone Number"
            email="Email Address"
          />
        </div>

        <div className="col-start-1 col-end-2 row-start-4 row-end-2">
          <Programform />
        </div>

        <div className="col-start-1 col-end-2 row-start-3 row-end-3">
          <Feeform />
        </div>

        <div className="col-start-1 col-end-2 row-start-7 row-end-4">
          <Priceform
            total="110000"
            due="10000"
            paid="100000"
            duedate="2026-03-10"
            paymentMethod="UPI"
          />
        </div>

        <div className="col-start-2 col-end-3 row-start-1 row-end-13">
          <Bill button={<Buttons src1="" src2="" h1="Internship Invoice" h2="" />} name="Akash" email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxhead="Program Enrolled" boxprogram="Web Development Internship" batch="Batch: Summer 2024- A" duration="Duration: Jan 01 -Feb 25,2026" detailhead="Program Enrolled" head11="Training Program Fee" head12="Core Curriculum Access and mentorship" amount1={500} head21="Internship Administrative Fee" head22="Project allocation and assessment" amount2={250} head31="Certification Issuance" head32="Digital and physical certificate" amount3={50} subamount11={30000} subamount12={0} subamount13={50} subamount21={30050} subamount22={50} subamount23={500} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced. This internship does not guarantee full-time employment. Certificate will be issued upon successful completion of all assigned projects." />  </div>

      </section>
    </div>
  );
};
export default Internship_invoice
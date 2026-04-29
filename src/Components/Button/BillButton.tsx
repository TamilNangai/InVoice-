
type Button={
    h1:string
}

function BillButton(props:Button) {
  return (
    <button>
      <h1>{props.h1}</h1>
    </button>
  )
}

export default BillButton

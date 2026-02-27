
import type { SVGProps } from "react";
const Svg3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.917 8.25v-.833m3.333.833v-2.5m3.333 2.5V4.083M4.917 14.917l3.333-3.334 3.333 3.334M.75.75h15M1.583.75h13.334v10c0 .46-.373.833-.834.833H2.417a.833.833 0 0 1-.834-.833z"
    />
  </svg>
);
export default Svg3;

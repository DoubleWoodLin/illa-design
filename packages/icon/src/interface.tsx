import { SVGAttributes } from "react"

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string;
  spin?: boolean;
}

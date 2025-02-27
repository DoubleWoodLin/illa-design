import { css } from "@emotion/core"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyImageCss(objFit: "fill" | "container" | "cover" | "none" | "scale-down", radius: string) {
  return css`
    object-fit: ${objFit};
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    border-radius: ${radius};
  `
}

export function applyDefaultFallback(width: string | number, height: string | number, radius: string) {
  return css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    border-radius: ${radius};
    width: ${width};
    height: ${height};
  `
}

export const applyOuterCss = css`
  vertical-align:middle;
  display: inline-flex;
`
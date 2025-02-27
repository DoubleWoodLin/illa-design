import { SpaceAlign, SpaceDirection, SpaceSize } from "./interface"
import { css, SerializedStyles } from "@emotion/react"

export function applyContainer(direction: SpaceDirection, align: SpaceAlign, wrap: boolean): SerializedStyles {
  let cssDirection: string
  switch (direction) {
    case "horizontal":
      cssDirection = "row"
      break
    case "vertical":
      cssDirection = "column"
      break
  }
  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: ${cssDirection};
    align-items: ${align};
    flex-wrap: ${wrap ? "wrap" : "nowrap"};
  `
}

export function applyDividerSizeSingle(size: SpaceSize, direction: SpaceDirection, wrap: boolean, isLast: boolean): SerializedStyles {
  let horSpace, verSpace: string
  switch (direction) {
    case "horizontal":
      horSpace = direction == "horizontal" && !isLast ? getSpaceSize(size) : "0px"
      verSpace = wrap ? getSpaceSize(size) : "0px"
      break
    case "vertical":
      verSpace = direction == "vertical" && !isLast ? getSpaceSize(size) : "0px"
      horSpace = wrap ? getSpaceSize(size) : "0px"
      break
  }
  return css`
    ${direction == "horizontal" ? css`height: 100%;` : css`width: 100%;`};
    display: inline-flex;
    margin-right: ${horSpace};
    margin-bottom: ${verSpace};
  `
}

export function applyDividerMultiSize(size: SpaceSize[], direction: SpaceDirection, isLast: boolean): SerializedStyles {
  let horSpace, verSpace: string
  switch (direction) {
    case "horizontal":
      horSpace = direction == "horizontal" && !isLast ? getSpaceSize(size[0]) : "0px"
      verSpace = getSpaceSize(size[1])
      break
    case "vertical":
      verSpace = direction == "vertical" && !isLast ? getSpaceSize(size[1]) : "0px"
      horSpace = getSpaceSize(size[0])
      break
  }
  return css`
    display: inline-flex;
    margin-right: ${horSpace};
    margin-bottom: ${verSpace};
  `
}

export function applyDividerSize(size: SpaceSize | SpaceSize[], direction: SpaceDirection, wrap: boolean, isLast: boolean): SerializedStyles {
  if (typeof size == "string") {
    return applyDividerSizeSingle(size, direction, wrap, isLast)
  } else {
    if (size.length == 1) {
      return applyDividerSizeSingle(size[0], direction, wrap, isLast)
    }
    if (size.length >= 2) {
      if (wrap) {
        return applyDividerMultiSize(size, direction, isLast)
      } else {
        switch (direction) {
          case "horizontal":
            return applyDividerSizeSingle(size[0], direction, wrap, isLast)
          case "vertical":
            return applyDividerSizeSingle(size[1], direction, wrap, isLast)
        }
      }
    } else {
      return css``
    }
  }
}

export function getSpaceSize(size: SpaceSize): string {
  switch (size) {
    case "mini":
      return "4px"
    case "small":
      return "8px"
    case "medium":
      return "16px"
    case "large":
      return "24px"
    default:
      return size
  }
}
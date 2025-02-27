/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ReactNode } from "react"
import { AvatarProps } from "./interface"
import { IconAvatar } from "./icon-avatar"
import { TextAvatar } from "./text-avatar"
import { ImgAvatar } from "./img-avatar"
import { AvatarGroupContext } from "./avatar-group"
import { css } from "@emotion/react"

const applyOuterCss = css`
  vertical-align: middle;
  display: inline-flex;
`

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {

  return <AvatarGroupContext.Consumer>
    {value => {
      const {
        colorScheme = value?.colorScheme ?? "gray",
        size = value?.size ?? "small",
        shape = "circle",
        text = undefined,
        src = undefined,
        icon = undefined,
        style = value?.style,
        ...otherProps
      } = props

      let finalNode: ReactNode
      if (props.src != undefined) {
        finalNode = <ImgAvatar colorScheme={colorScheme} size={size} shape={shape} text={text} src={src} icon={icon} />
      } else if (props.text != undefined) {
        finalNode = <TextAvatar colorScheme={colorScheme} size={size} shape={shape} text={text} src={src} icon={icon} />
      } else {
        finalNode = <IconAvatar colorScheme={colorScheme} size={size} shape={shape} text={text} src={src} icon={icon} />
      }
      return <div css={applyOuterCss} style={style} ref={ref} {...otherProps}>
        {finalNode}
      </div>
    }}
  </AvatarGroupContext.Consumer>

})

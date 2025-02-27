import { HeadingLevel } from "./interface"
import { css, SerializedStyles } from "@storybook/theming"

export function getHeadingSize(level: HeadingLevel): string[] {
  // font-size line-height
  switch (level) {
    case "h1":
      return ["64px", "normal"]
    case "h2":
      return ["56px", "normal"]
    case "h3":
      return ["48px", "normal"]
    case "h4":
      return ["36px", "normal"]
    case "h5":
      return ["24px", "normal"]
    case "h6":
      return ["20px", "normal"]
  }
}

export function applyTypoContainer(): SerializedStyles {
  return css`
    display: flex;
    word-break: break-all;
    h1 {
      font-size: ${getHeadingSize("h1")[0]};
      line-height: ${getHeadingSize("h1")[1]};
    }

    h2 {
      font-size: ${getHeadingSize("h2")[0]};
      line-height: ${getHeadingSize("h2")[1]};
    }

    h3 {
      font-size: ${getHeadingSize("h3")[0]};
      line-height: ${getHeadingSize("h3")[1]};
    }

    h4 {
      font-size: ${getHeadingSize("h4")[0]};
      line-height: ${getHeadingSize("h4")[1]};
    }

    h5 {
      font-size: ${getHeadingSize("h5")[0]};
      line-height: ${getHeadingSize("h5")[1]};
    }

    h6 {
      font-size: ${getHeadingSize("h6")[0]};
      line-height: ${getHeadingSize("h6")[1]};
    }
  `
}
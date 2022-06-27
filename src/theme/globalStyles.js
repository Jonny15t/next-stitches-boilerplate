import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  html: {
    minHeight: "100%",
    display: "flex",
  },
  body: {
    flex: 1,
    display: "flex",
  },
  "#__next": {
    flex: 1,
  },
});

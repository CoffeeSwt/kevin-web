// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  rules: [
    ["flex-basis-auto", { "flex-basis": "auto" }],
    ["aspect-43", { "aspect-ratio": "3 / 4" }],
    ["translate-x--full", { transform: "translateX(-100%)" }],
    ["translate-y--full", { transform: "translateY(-100%)" }],
    [
      /^translate-y-full-(\d+(\.\d+)?)$/,
      (match) => ({ transform: `translateY(100%) translateY(${match[1]}rem)` }),
    ],
    [
      /^translate-y-full--(\d+(\.\d+)?)$/,
      (match) => ({
        transform: `translateY(100%) translateY(-${match[1]}rem)`,
      }),
    ],
    ["filter-blur", { filter: "blur(10px)" }],
    ["backdrop-blur", { "backdrop-blur": "blur(10px)" }],
    [/^min-h-screen-(\d+)$/, (match) => ({ "min-height": `${match[1]}vh` })],
  ],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "size-full": "w-full h-full",
    "block-divid": "h-4 flex-shrink-0",
    "full-absolute": "absolute size-full top-0 left-0",
    blur: "filter-blur backdrop-blur",
  },
  theme: {
    colors: {
      "main-bg": "#070707",
      black: "#111111",
      "black-pure": "#000",
      white: "#fff",
      "light-black": "#222",
      "black-l-1": "#1e1e20",
      "white-light": "#ebeaed",
      "blue-bar": "#534afd",
      "blue-apple": "#0071e3",
      "gray-dark": "#333",
      "bili-pink": "#fc8bab",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ["Helvetica"],
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

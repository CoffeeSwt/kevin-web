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
  rules: [["flex-basis-auto", { "flex-basis": "auto" }]],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "size-full": "w-full h-full",
    "block-divid": "h-4 flex-shrink-0",
  },
  theme: {
    colors: {
      "main-bg": "#070707",
      black: "#111111",
      white: "#ebeaed",
      "light-black": "#222",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ["PingFangSC-Regular", "Helvetica"],
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

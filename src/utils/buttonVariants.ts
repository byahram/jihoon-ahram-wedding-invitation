import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors shadow-md cursor-pointer",
  {
    variants: {
      variant: {
        default: "w-full bg-gray-200 rounded hover:bg-gray-300",
        solid:
          "bg-background flex flex-col items-center justify-center rounded-md border border-[#eee] tracking-tight break-all transition",
        floating:
          "bg-gray-800/50 text-white rounded-full flex items-center justify-center text-2xl transition",
        more: "text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition",
        icon_text:
          "flex justify-center items-center gap-1.5 text-md rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-600 shadow-none",
        account: "flex justify-between items-center w-full shadow-none",
        slider_icon: "absolute text-foreground z-10 cursor-pointer shadow-none",
        gallery_more:
          "bg-white/60 backdrop-blur-sm text-gray-600 border border-gray-200 hover:bg-white hover:shadow-lg transition rounded-full text-sm px-6 py-2",
        only_icon: "shadow-none text-gray-700",
      },
      size: {
        default: "px-10 py-3",
        floating: "w-12 h-12",
        icon: "px-2 py-1",
        icon_text: "px-2 py-2",
        account: "py-3 px-6",
        slider_icon: "text-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

export const ShowToast = (
  toast: any,
  title: any,
  type: string,
  duration?: number
) => {
  const toastStyles =
    type === "success"
      ? "bg-green-600 capitalize text-gray-100"
      : type === "error"
      ? "bg-red-600 capitalize text-white"
      : "";

  toast({
    variant: "destructive",
    title: title,
    className: `${toastStyles} ${lato.className} border-none outline-none fixed right-1 w-[80%] md:w-[50%] max-w-[400px] lg:max-w-[400px] top-2 h-[70px]`,
  });
};

import "@assets/styles/global.css";
import { setup } from "twind";
import { ZephyrProvider } from "@utils/context";

setup({
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  const theme = {
    Button: {
      indigo:
        "inline-flex items-center border-2 font-medium rounded-md leading-6 focus:relative focus:z-20 focus:ring-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent shadow-sm text-white dark:ring-offset-indigo-900 ring-offset-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    },
  };
  return (
    <ZephyrProvider theme={theme}>
      <Component {...pageProps} />
    </ZephyrProvider>
  );
};

export default MyApp;

import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SEO } from "../components/Global/SEO";
import { Footer } from "../components/Global/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO/>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer/>
    </>
  );
}

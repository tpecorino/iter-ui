import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { TripProvider } from "../context/TripContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TripProvider>
      <Component {...pageProps} />
    </TripProvider>
  );
}

export default MyApp;

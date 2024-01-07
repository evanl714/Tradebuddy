import { SaasProvider } from "@saas-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider>
      <Component {...pageProps} />
    </SaasProvider>
  );
}

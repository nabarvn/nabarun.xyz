import { ThemeProvider } from "next-themes";
import { Layout } from "../components";

import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/reactTooltip.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

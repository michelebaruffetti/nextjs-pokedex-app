// _app.tsx

import { Hydrate } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  pageProps: {
    dehydratedState?: {
      data?: any; // Mantieni any temporaneamente
    };
  };
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

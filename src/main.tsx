import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/index.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <Suspense fallback={<div>Loading..</div>}>
      <AppRouter />
    </Suspense>
  </StrictMode>
);

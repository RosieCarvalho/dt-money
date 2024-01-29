import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { GlobalStyle } from "./global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

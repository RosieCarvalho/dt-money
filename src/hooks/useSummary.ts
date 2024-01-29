import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

//HOOKS são funções que usam os demais hooks do react
export function useSummary() {
  // const { transactions } = useContext(TransactionsContext);
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  //acc é o valor inicial e formato inicial que vou modificar, no caso aqui:
  //  {
  //     income: 0,
  //     outcome: 0,
  //     total: 0,
  //   }
  //transaction é cada item do array
  // const summary = transactions.reduce(
  //   (acc, transaction) => {
  //     if (transaction.type === "income") {
  //       acc.income += transaction.price;
  //       acc.total += transaction.price;
  //     } else {
  //       acc.outcome += transaction.price;
  //       acc.total -= transaction.price;
  //     }

  //     return acc;
  //   },
  //   {
  //     income: 0,
  //     outcome: 0,
  //     total: 0,
  //   }
  // );

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }
        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return summary;
}

import { Summary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

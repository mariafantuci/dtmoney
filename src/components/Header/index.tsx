import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./syles";

interface HeaderProps {
  onPenNewTransactionModal: () => void;
}

export function Header({onPenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money - logo" />
        <button type="button" onClick={onPenNewTransactionModal}>
          Nova transação
        </button>

        
      </Content>
    </Container>
  );
}

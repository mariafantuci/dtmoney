import { HeaderContainer, HeaderContent, NewTransactionButton } from './style';
import logo from '../../assets/logo.svg'
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="two triangles one on another, both green and a white text written the site's name" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
}
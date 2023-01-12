import * as Dialog from '@radix-ui/react-dialog';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './style';
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal';
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="two triangles one on another, both green and a white text written the site's name" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}
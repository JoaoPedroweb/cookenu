import { HeaderStyled } from "./styled";
import { Button } from '@chakra-ui/react';
import {
    goToFeedPage,
    goToLoginPage
} from '../../routes';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderStyled>
            <Button onClick={() => goToFeedPage(navigate)} variant="header">Cookenu</Button>
            <Button onClick={() => goToLoginPage(navigate)} variant="header">Login</Button>
        </HeaderStyled>
    )
}
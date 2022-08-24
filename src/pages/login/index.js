import { useForm } from '../../hooks';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../../constants';
import {
    CenteredPageContainer as LoginPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components';
import {
    Button
} from '@chakra-ui/react';
import logo from '../../assets/logo.png'

export const LoginPage = () => {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: "",
        password: ""
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt="logo do Cookenu"/>
                    <EmailInput 
                        value={form.email} 
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />
                    <PasswordInput 
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                    />
                    <Button type="submit" variant="formMain">Entrar</Button>
                    <Button type="button" variant="formSecondary">Não possui conta? Cadastrar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}
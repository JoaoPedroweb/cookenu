import { useForm } from '../../hooks';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
    LoginPageContainer,
    FormContainer
} from './styled';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputRightElement,
    InputGroup,
    IconButton,
    Button
  } from '@chakra-ui/react';

export const LoginPage = () => {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: "",
        password: ""
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email));
        setIsPasswordValid(/.{6,}/.test(form.password));
    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                <FormControl isInvalid={!isEmailValid}>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        name="email"
                        // type='email'
                        value={form.email}
                        onChange={onChangeInputs}
                        placeholder="email"
                    />
                    {!isEmailValid ? (
                        <FormErrorMessage as="p">
                            E-mail inválido.
                        </FormErrorMessage>
                    ) : undefined}
                    </FormControl>
                    <FormControl isInvalid={!isPasswordValid}>
                        <FormLabel>Senha</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                name="password"
                                value={form.password}
                                onChange={onChangeInputs}
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Senha com no mínimo 6 caracteres'
                            />
                            <InputRightElement width='4.5rem'>
                                <IconButton h='1.75rem' size='sm' onClick={onClickShowPassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye/>}
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                        {!isPasswordValid ? (
                            <FormErrorMessage as="p">
                                A senha deve conter ao menos 6 caracteres
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>
                    <Button type="submit" variant="formMain">Entrar</Button>
                    <Button type="button" variant="formSecondary">Não possui conta? Cadastrar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}
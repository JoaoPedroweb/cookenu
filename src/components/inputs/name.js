import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react';

export const NameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel>Nome</FormLabel>
            <Input
                name="name"
                value={value}
                onChange={onChange}
                placeholder="Nome"
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    Nome deve ter ao menos 2 caracteres
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}
import { useForm } from '../../hooks';
import { useEffect, useState } from 'react';
import { validateName } from '../../constants';
import {
    CenteredPageContainer as AddRecipePageContainer,
    FormContainer,
    DescriptionTextArea,
    ImageInput,
    TitleInput
} from '../../components';
import {
    Button,
} from '@chakra-ui/react';
import { AddRecipe } from '../../constants';
import { PageTitleStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks';

export const AddRecipePage = () => {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        description: "",
        title: "",
        image: ""
    });

    const navigate = useNavigate();
    useProtectedPage(navigate);

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isUrlValid, setIsUrlValid] = useState(true);

    useEffect(() => {
        setIsTitleValid(validateName(form.title,4));
        setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.image));
    }, [form]);

    const onSubmit = async (e) => {

        e.preventDefault();
        
        try {
            if(isUrlValid && isTitleValid) {
                await AddRecipe({
                    // title: form.title,
                    description: form.description,
                    image: form.image
                });
                alert("Receita cadastrada com sucesso");
            }
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <AddRecipePageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <PageTitleStyled>Adicionar nova Receita</PageTitleStyled>
                    <TitleInput 
                        value={form.title}
                        onChange={onChangeInputs}
                        isValid={isTitleValid}
                    />
                    <DescriptionTextArea 
                        value={form.description}
                        onChange={onChangeInputs}
                        isValid={true}
                    />
                    <ImageInput 
                        value={form.image}
                        onChange={onChangeInputs}
                        isValid={isUrlValid}
                    />
                    <Button type="submit" variant="form-main">Cadastrar</Button>
                </form>
            </FormContainer>
        </AddRecipePageContainer>
    )
}
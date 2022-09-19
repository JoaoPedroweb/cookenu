import { FeedContainerStyled, RecipeCardStyled } from "./styled";
import { useEffect, useState } from "react";
import { ListRecipes } from '../../constants';
import {
    goToRecipeDetailPage,
    goToAddRecipePage,
} from '../../routes';
import { useNavigate } from 'react-router-dom';
import {
    Button
} from '@chakra-ui/react';
import { useProtectedPage } from '../../hooks';

export const FeedPage = () => {

    const navigate = useNavigate();
    useProtectedPage(navigate);
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        ListRecipes()
        .then(data => {
            setRecipes(data);
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);



    const onClickCard = (id) => {
        goToRecipeDetailPage(navigate,id);
    }

    const onClickAddButton = () => {
        goToAddRecipePage(navigate);
    }
    return (
        <FeedContainerStyled>
            {recipes.slice(0,20).map((recipe, i) => (
                <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.recipe_id)}>
                    <img src={recipe.image}/>
                    <h3>{recipe.title}</h3>
                </RecipeCardStyled>
            ))}
            <Button onClick={() => onClickAddButton()} variant="add-recipe">+</Button>
        </FeedContainerStyled>
    )
}
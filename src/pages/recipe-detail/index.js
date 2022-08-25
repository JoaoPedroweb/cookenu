import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetRecipe } from '../../constants';
import { PageContainer } from './style';

export const RecipeDetailPage = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        GetRecipe(id)
        .then(recipe => {
            setRecipe(recipe[0]);
        })
        .catch(e => alert(e.response.data.message))
    }, []);

    return (
        !recipe ? <h1>Não há receitas com esse id</h1> : (
        <PageContainer>
            <img src={recipe.image} alt="imagem da receita"/>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </PageContainer>
    )
    )
}
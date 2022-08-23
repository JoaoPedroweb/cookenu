import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage
} from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/feed" element={<FeedPage />}/>
                <Route path="/add-recipe" element={<AddRecipePage />}/>
                <Route path="/recipe/:id" element={<RecipeDetailPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
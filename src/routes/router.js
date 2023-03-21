import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    SingupPage,
    PostPage,
    CommentsPage,
} from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/singup" element={<SingupPage/>}></Route>
                <Route path="/posts" element={<PostPage/>}></Route>
                <Route path="/comments" element={<CommentsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export const goToLoginPage = (navigator) => {
    navigator('/login')
}

export const goToSingupPage = (navigator) =>{
    navigator('/singup')
}

export const goToPostsPage = (navigator, id) =>{
    navigator(`/posts/${id}`)
}

export const goToCommentsPage = (navigator, id) =>{
    navigator(`/comments/${id}`)
}
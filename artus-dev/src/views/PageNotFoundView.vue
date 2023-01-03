
<template>
    <div class="pageNotFound">
        <h1 class="pageNotFound404">404</h1>
        <h1 class="pageNotFoundTitle">Die Seite existiert nicht!</h1>
        <router-link to="/" class="pageNotFoundHomeLink">nach Hause</router-link>
    </div>
    <div class="funnyCursorCircle"></div>

    
</template>




<style>

    .pageNotFoundHomeLink {
        border: 4px solid var(--color-green);
        color: var(--color-green);
        border-radius: 100px;
        text-decoration: none;
        padding: 15px 75px;
        font-size: 20px;
        transition: all 150ms ease-in-out;
        animation: pageNotFoundTextAnimation 5s linear infinite;
    }
    .pageNotFoundHomeLink:hover {
        color: var(--color-background);
        border: none;
        padding: 25px 85px;
        background: var(--color-text-gradient);
    }

    .pageNotFound404 {
        font-size: 8rem;
    }
    .pageNotFoundTitle {
        font-size: 5rem;
        margin-top: -8rem;
    }
    .pageNotFound {
        text-align: center;
        margin-top: -4rem;
    }

    @keyframes pageNotFoundTextAnimation {
        to {
            background-position: 200% 0;
        }
    }
    
    .pageNotFound h1 {
        color: transparent;
        background: var(--color-text-gradient);
        background-clip: text;
        animation: pageNotFoundTextAnimation 5s linear infinite;
    }
</style>
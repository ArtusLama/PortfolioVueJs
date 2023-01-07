
<template>
    <div class="pageNotFound" v-motion-slide-visible-bottom>
        <h1 class="pageNotFound404">Oops!</h1>
        <h1 class="pageNotFoundText">I'm sorry, but the page you were looking for has become alive and decided to leave the internet.</h1>
        <router-link to="/" class="pageNotFoundHomeLink">Go Home</router-link>
    </div>

    
</template>




<style> 


    .pageNotFoundHomeLink {
        border: 4px solid var(--color-green);
        color: var(--color-green);
        border-radius: 100px;
        text-decoration: none;
        padding: 13px 20px;
        width: 12rem;
        font-size: 20px;
        transition: all 150ms ease-in-out;
        animation: pageNotFoundTextAnimation 5s linear infinite;
    }
    .pageNotFoundHomeLink:hover {
        border: none;
        color: var(--color-background);
        background: var(--color-text-gradient);
    }

    .pageNotFound404 {
        font-size: 8rem;
    }
    .pageNotFoundText {
        width: 60%;
        font-size: 2rem;
        margin-top: -5rem;
    }
    .pageNotFound {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
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

<script setup>
    import GithubIcon from "./icons/GithubIcon.vue"
</script>

<template>
    <div class="navbar">
        <h1><span class="green_logo_bracket">&lt;</span> Artus <span class="green_logo_bracket">&gt;</span></h1>
        
        <ul>
            <li><a href="">DOCUMENTATION</a></li>
            <li><a href="">Babelibub</a></li>
            <li><a href="">Boaaa</a></li>
            <li><a href="">HalloHollaHello</a></li>
            <a href="https://github.com/ArtusLama" target="_blank" class="navbar_icon navbar_large_screen"><GithubIcon/></a>
            <button class="navbar_button navbar_large_screen">Contact</button>
            <button class="navbar_button navbar_button_small_screen navbar_small_screen"><GithubIcon/><span>GitHub</span></button>
        </ul>
        
    </div>
</template>

<style>
    .navbar {

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 10rem;
    }
    .navbar h1 {
        white-space: nowrap;
    }
    .navbar ul {
        display: flex;
        align-items: center;
        list-style-type: none;
    }
    .navbar ul *{
        transition: color, fill, background-color 100ms ease-in-out;
    }
    .navbar ul li {
        margin-right: 2rem;
    }
    .navbar ul li a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        transition: color 100ms ease-in-out;
    }
    .navbar ul li a:hover {
        color: var(--color-green);
    }
    .navbar_icon {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-left: 4rem;
    }
    .navbar_icon svg {
        width: 1.5rem !important;
    }
    .navbar_icon svg path {
        fill: white;
    }
    .navbar_icon svg:hover path {
        fill: var(--color-green);
    }
    .navbar_button {
        background-color: transparent;
        border: 3px var(--color-green) solid;
        border-radius: 100px;
        height: 2rem;
        width: 6rem;
        cursor: pointer;

        margin-left: 1rem;

        transition: background-color 100ms ease-in;
    }
    .navbar_button:hover {
        background-color: var(--color-green);
        
    }
    .green_logo_bracket {
        color: var(--color-green);
        font-weight: bolder;
        margin-bottom: 1rem;
    }

    .navbar_small_screen {
        display: none;
    }


    @media screen and (max-width: 1150px) {
        
        .navbar_large_screen {
            display: none;
        }
        .navbar_small_screen {
            display: block;
        }

        .navbar {
            flex-direction: column;
        }
        .navbar h1 {
            width: 100vw;
            text-align: center;
        }
        .navbar ul {
            flex-direction: column;
        }
        .navbar ul *{
            width: 100%;
            text-align: center;
        }
        .navbar_button_small_screen {
            margin: 0;
        }
        .navbar_button_small_screen svg {
            width: 1.2rem;
            fill: var(--color-white);
            margin-right: 6px;
            vertical-align: middle;
        }
        .navbar_button_small_screen span {
            vertical-align: middle;
        }


    }
</style>
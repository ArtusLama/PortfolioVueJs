
<script setup>
    import GithubIcon from "./icons/GithubIcon.vue"
    
</script>

<template>

    <div class="navbar navbarLargeScreen">
        <h1><span class="green_logo_bracket">&lt;</span> Artus <span class="green_logo_bracket">&gt;</span></h1>
        
            
        <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/about-me">ABOUT ME</router-link></li>
            <li><router-link to="/projects">PROJECTS</router-link></li>
        </ul>
        <ul>
            <a href="https://github.com/ArtusLama" target="_blank" class="navbar_icon"><GithubIcon/></a>
            <button class="navbar_button">Contact</button>
        </ul> 
    </div>


    <div class="navbar navbarSmallScreen">
        
        <ul class="smallNavbar_header">
            <h1><span class="green_logo_bracket">&lt;</span> Artus <span class="green_logo_bracket">&gt;</span></h1>
            <span class="navbar_hamburger" @click="toggleHamburgerNavbarMenu()">
                <div class="navbar_hamburger_1"></div>
                <div class="navbar_hamburger_2"></div>
                <div class="navbar_hamburger_3"></div>
            </span>
        </ul>
        <div class="smallNavbarMenuContent">
            <ul class="smallNavbar_links">
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about-me">ABOUT ME</router-link></li>
                <li><router-link to="/projects">PROJECTS</router-link></li>
            </ul>
            <ul>
                <button class="smallNavbar_button"><GithubIcon/><span>GitHub</span></button>
            </ul>
        </div>
        
        
        
    </div>
</template>

<script>
    export default {

        methods: {
            
            toggleHamburgerNavbarMenu() {
                document.querySelector(".smallNavbarMenuContent").classList.toggle("showMenuContent");
            }
        }

    }
</script>

<style>



    .navbar {

        display: flex;
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
        white-space: nowrap;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        transition: color 100ms ease-in-out;
    }
    .navbar ul li a:hover {
        color: var(--color-green);
    }
    .navbar ul li a.router-link-active {
        color: var(--color-green);
    }
    .navbar_icon {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .navbar_icon svg {
        width: 1.5rem !important;
    }
    .navbar_icon svg path {
        fill: var(--color-white);
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
        color: var(--color-green);

        margin-left: 1rem;

        transition: background-color 100ms ease-in;
    }
    .navbar_button:hover {
        color: var(--color-white);
        background-color: var(--color-green);
        
    }
    .green_logo_bracket {
        color: var(--color-green);
        font-weight: bolder;
        margin-bottom: 1rem;
    }

    

    .navbar_hamburger {
        width: 2rem;
        height: 2rem;
        background-color: rgb(121, 121, 121);
    }

    .navbarSmallScreen {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .navbarSmallScreen {
            display: flex;
            position: static;
            background-color: rgb(24, 24, 27);
            flex-direction: column;
            width: 100vw;
            padding: 0;
            left: 0;
            right: 0;
            top: 0;
        }
        .navbarLargeScreen {
            display: none;
        }

        .navbar ul {
            padding: 0;
            flex-direction: column;
            
        }
        .navbar ul *{
            padding: 0;
            margin: 0 !important;
            text-align: center;
        }

        .smallNavbar_header {
            flex-direction: row !important;
            justify-content: space-evenly;
            width: 100vw;
            
        }
        .navbar h1 {
            text-align: center;
            left: 0;
        }

        .smallNavbarMenuContent {
            display: none;
        }
        .smallNavbarMenuContent.showMenuContent {
            display: block;
        }

        .smallNavbar_button {
            white-space: nowrap;
        }
        .smallNavbar_button svg {
            width: 1.2rem;
            fill: var(--color-white);
            margin-right: 6px;
            vertical-align: middle;
        }
        .smallNavbar_button span {
            vertical-align: middle;
        }

    }

</style>
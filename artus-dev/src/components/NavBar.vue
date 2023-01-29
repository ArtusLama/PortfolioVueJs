
<script setup>
    import GithubIcon from "./icons/GithubIcon.vue"
    import router from "@/router/index.js"
    
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
            <router-link to="/contact"><button class="navbar_button">Contact</button></router-link>
        </ul> 
    </div>


    <div class="navbar navbarSmallScreen">
        
        <ul class="smallNavbar_header">
            <h1><span class="green_logo_bracket">&lt;</span> Artus <span class="green_logo_bracket">&gt;</span></h1>
            <span class="navbar_hamburger" @click="toggleHamburgerNavbarMenu()">
                <div class="navbar_hamburgerLine menuLine1"></div>
                <div class="navbar_hamburgerLine menuLine2"></div>
                <div class="navbar_hamburgerLine menuLine3"></div>
            </span>
        </ul>
        <div class="smallNavbarMenuContent">
            <ul class="smallNavbar_links">
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about-me">ABOUT ME</router-link></li>
                <li><router-link to="/projects">PROJECTS</router-link></li>
            </ul>
            <ul>
                <a href="https://github.com/ArtusLama" target="_blank"><button class="smallNavbar_button"><GithubIcon/><span>GitHub</span></button></a>
            </ul>
        </div>
        
        
        
    </div>
</template>

<script>
    export default {

        methods: {
            
            toggleHamburgerNavbarMenu() {
                document.querySelector(".smallNavbarMenuContent").classList.toggle("showMenuContent");
                document.querySelector(".navbar_hamburger").classList.toggle("menuOpened");
            },
            closeHamburgerNavbarMenu() {
                document.querySelector(".smallNavbarMenuContent").classList.remove("showMenuContent");
                document.querySelector(".navbar_hamburger").classList.remove("menuOpened");
            }
        },
        mounted() {
            router.beforeEach((to, from, next) => {
                this.closeHamburgerNavbarMenu();
                next()
            })
        }

    }
</script>

<style>



    .navbar {

        display: flex;
        justify-content: space-evenly;
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
        position: absolute;
        right: 2rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .navbar_hamburgerLine {
        height: 4px;
        width: 100%;
        background-color: var(--color-white);
        border-radius: 20px;
        
    }
    .navbar_hamburger > .navbar_hamburgerLine {
        transition: all 200ms ease-in-out;
    }
    .navbar_hamburger.menuOpened > .navbar_hamburgerLine.menuLine1 {
        transform: translateY(9px) rotate(45deg);
    }
    .navbar_hamburger.menuOpened > .navbar_hamburgerLine.menuLine2 {
        opacity: 0;
        transform: rotateX(2deg);
    }
    .navbar_hamburger.menuOpened > .navbar_hamburgerLine.menuLine3 {
        transform: translateY(-9px) rotate(-45deg);
    }




    .navbarSmallScreen {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .navbarSmallScreen {
            display: flex;
            background-color: var(--color-background-2);
            flex-direction: column;
            width: 100vw;
            padding: 0;
            left: 0;
            right: 0;
            top: 0;
            
        
            z-index: 9999;
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
            justify-content: center;
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
            background-color: var(--color-green);
            border: none;
            border-radius: 100px;
            padding: 4px 6px !important;
            cursor: pointer; 
        }
        .smallNavbar_button svg {
            width: 1.2rem;
            fill: var(--color-white);
            margin-right: 6px !important;
            vertical-align: middle;
        }
        .smallNavbar_button span {
            vertical-align: middle;
        }

    }

</style>
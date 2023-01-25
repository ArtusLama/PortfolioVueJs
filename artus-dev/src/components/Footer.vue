<script setup>
    import DiscordIcon from './icons/DiscordIcon.vue';
    import GitHub from './icons/GithubIcon.vue';
</script>


<template>
    <div class="footer">
        
        <div class="footerSection">
            <ul>
                <li class="footerIcon"><a href="https://discord.com/users/713455158625042433" target="_blank"><DiscordIcon class="footerIcon_Discord"/></a></li>
                <li class="footerIcon"><a href="https://github.com/ArtusLama" target="_blank"><GitHub class="footerIcon_Github"/></a></li>
                <li class="footerIcon"><a href="https://discord.com/users/713455158625042433" target="_blank"><DiscordIcon class="footerIcon_Discord"/></a></li>
            </ul>
        </div>
        <div class="footerSection">
            <ul>
                <li class="footerLink"><router-link to="/">Home</router-link></li>
                <li class="footerLink"><router-link to="/">Contact</router-link></li>
                <li class="footerLink"><router-link to="/terms">Terms</router-link></li>
                <li class="footerLink"><router-link to="/privacypolicy">Privacy Policy</router-link></li>
            </ul>
        </div>
        <div class="footerCopyright">Copyright ©2023 Arthur Paucke</div>
    </div>
</template>

<style>
    .footer {
        width: 100vw;
        padding-top: 2rem;
        padding-bottom: 1rem;
        background-color: var(--color-background-2);
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footerSection {
        margin-top: 1rem;
    }
    .footerSection ul{
        padding: 0;
        margin: 0;
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: space-evenly;
    }
    .footerSection ul li {
        margin: 0 clamp(10px, 4vw, 2rem);
    }
    .footerIcon {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        transition: filter 150ms ease-in-out;
    }
    .footerIcon a {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
    }
    .footerIcon:hover {
        filter: brightness(75%);
    }
    .footerIcon svg {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }
    .footerIcon_Discord {
        fill: #5865f2;
    }
    .footerIcon_Github {
        fill: #ececec;
        width: 1.9rem !important;
        height: 1.9rem !important;
    }

    .footerLink a{
        text-decoration: none;
        
    }
    .footerCopyright {
        margin-top: 2rem;
        font-weight: 600;
        color: var(--color-light-grey);
    }
</style>
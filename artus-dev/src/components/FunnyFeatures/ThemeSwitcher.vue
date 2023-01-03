<template>
    <div>
        <button  @click="toggleTheme()">
            <span v-if='this.theme == "purple"'> Light</span>
            <span v-else> Dark</span>     
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme: ""
        };
    },

    mounted() {
        let localTheme = localStorage.getItem("theme");
        document.body.setAttribute("theme", localTheme);
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme == "purple" ? "" : "purple";
            document.body.setAttribute("theme", this.theme);
            localStorage.setItem("theme", this.theme);
        }
    }    
    
}
</script>
<style scoped>
    
</style>
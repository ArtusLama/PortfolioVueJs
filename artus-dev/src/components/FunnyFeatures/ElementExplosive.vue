<template>
    
</template>

<script>
    export default {
        props: {
            targetId: String,
            targetClass: String,
            targetTag: String
        },
        mounted() {
            setTimeout(() => {
                if (this.targetId != null) {
                    this.executeAsElement(document.getElementById(this.targetId));
                } else if (this.targetClass != null) {
                    document.querySelectorAll("." + this.targetClass).forEach(e => this.executeAsElement(e));
                } else if (this.targetTag != null) {
                    for (const element of document.getElementsByTagName(this.targetTag)) {
                        this.executeAsElement(element);
                    }
                }    
            }, 2000)
        },    
        methods: {
            executeAsElement(element) {
                element.classList.add("FunnyExplosive");
            }
        }
    }
</script>

<style>

    .FunnyExplosive {
        animation: FunnyExplosiveAnimation 10s infinite;
    }

    @keyframes FunnyExplosiveAnimation {
        0% {
            transform: rotate(0);
        }
        60% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
</style>
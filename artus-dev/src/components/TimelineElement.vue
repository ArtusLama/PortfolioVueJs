


<template>
    <div class="timelineElement" v-motion-slide-visible-left>
        <div class="timelineElementPath">
            <div class="timelineElementDot"></div>
            <div class="timelineElementStroke"></div>
        </div>
        <div class="timelineElementContent">
            <h1>{{ title }}</h1>
            <h2>{{ text }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["title", "text"]
    }
</script>

<style scoped>
    .timelineElement {
        display: flex;
    }


    .timelineElementPath {
        width: 4rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .timelineElementDot {
        width: 2.25rem;
        height: 2.25rem;
        border: 3px solid var(--color-green);
        border-radius: 10px;
        box-shadow: 0px 0px 40px 0px rgba(var(--color-green-rgb), 0.4);
        background: transparent;
    }
    .timelineElementStroke {
        margin-top: 1rem;
        width: 4px;
        height: 12rem;
        border-radius: 100px;
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, var(--color-green) 20%, var(--color-green) 50%, rgba(0,0,0,0) 100%);
    }


    .timelineElementContent {
        width: 40vw;
    }
    .timelineElementContent h1{
        margin: 0 2rem;
        font-weight: 600;
    }
    .timelineElementContent h2 {
        margin: 2rem 2rem;
    }
    
</style>
<script setup>
	import WorkInProgress from '../components/utils/WorkInProgress.vue';
</script>

<template>
  	<main>
    	<div class="homeTitle" v-motion-slide-visible-bottom>
			<h2>Welcome, I'm</h2>
			<h1>Arthur</h1>
			<h3>a idk xD</h3>
		</div>
		<WorkInProgress/>
  	</main>
</template>

<style>

    @keyframes gradientTextAnimation {
        to {
            background-position: 200% 0;
      	} 
    }

    .homeTitle * {
        color: transparent;
		margin: 0;
        background: var(--color-text-gradient);
        background-clip: text;
        animation: pageNotFoundTextAnimation 5s linear infinite;
    }
	.homeTitle {
		margin-top: 6rem;
		text-align: center;
		padding: 2rem;
	}
    .homeTitle h1 {
		margin-top: -2rem;
    	font-size: 8rem;
    }
    .homeTitle h2 {
		font-size: 3rem;
    }
	.homeTitle h3 {
		font-size: 2rem;
		margin-top: -2rem;
    }

</style>

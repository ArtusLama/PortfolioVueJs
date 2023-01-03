<script setup>
  	import TimeLine from "@/components/Timeline.vue"
</script>

<template>
  	<main>
    	<div class="homeTitle">
			<h2>Moin, ich bin</h2>
			<h1>Arthur</h1>
			<h3>- dafwwa ef</h3>
			<h3>- wa 3r 3res</h3>
		</div>
    
    	<TimeLine/>



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
		text-align: center;
		padding: 2rem;
	}
    .homeTitle h1 {
		margin-top: -2rem;
    	font-size: 6rem;
    }
    .homeTitle h2 {
		font-size: 2rem;
    }

</style>

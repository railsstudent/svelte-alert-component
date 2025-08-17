<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="app">
	{@render children?.()}
</div>

<style>
	#app {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		font-weight: normal;
	}
</style>

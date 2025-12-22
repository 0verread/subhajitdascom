<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<div class="h-screen bg-[#f5f3f0]">
	<div class=""></div>
	{@render children()}
</div>

<style>
</style>

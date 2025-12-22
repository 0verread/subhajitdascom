<script>
	export let data;
</script>

<article class="flex flex-col px-6 py-8 sm:px-12 md:px-16 lg:mx-[15%] xl:mx-[20%] md:py-12 lg:py-16 gap-3 max-w-4xl mx-auto">
	<h1 class="text-2xl text-zinc-900">{data.metadata?.title}</h1>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
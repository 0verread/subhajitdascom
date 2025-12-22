<script>
	export let data;
</script>

<div class="flex flex-col px-6 py-8 sm:px-12 md:px-16 lg:mx-[15%] xl:mx-[20%] md:py-12 lg:py-16 gap-3 max-w-4xl mx-auto">
	<h1 class="text-3xl text-zinc-900">Subhajit</h1>
	<p class="text-sm text-gray-700 leading-relaxed">
		Hi there! I'm Subhajit, my friends call me Jeet. I'm co-founder of 
		<a href="https://modulus.so" target="_blank" class="text-black hover:text-black underline decoration-black-300 hover:decoration-black-500 transition-colors">modulus</a> 
		- AI-native platform for teams to build their product better. I spend most of my waking hours working on it. I grew up in India and moved to the USA to complete my CS degree. I currently live in California.
	</p>
	<div class="mt-2">
		<span class="text-sm text-gray-700">Find me on</span>
		<ul class="mt-2 space-y-1">
			<li class="flex items-start">
				<span class="text-gray-700 mr-2">•</span>
				<span class="text-sm text-gray-700">
					GitHub: <a href="https://github.com/0verread" target="_blank" class="text-black hover:text-black underline decoration-black-300 hover:decoration-black-500 transition-colors">0verread</a>
				</span>
			</li>
			<li class="flex items-start">
				<span class="text-gray-700 mr-2">•</span>
				<span class="text-sm text-gray-700">
					Twitter: <a href="https://x.com/subhajitsh" target="_blank" class="text-black hover:text-black underline decoration-black-300 hover:decoration-black-500 transition-colors">@subhajitsh</a>
				</span>
			</li>
		</ul>
	</div>

	{#if data.posts && data.posts.length > 0}
		<div class="mt-2">
			<h2 class="text-base text-zinc-900 mb-2 font-medium">Writing</h2>
			<ul class="space-y-3">
				{#each data.posts as post}
					<li class="flex items-center gap-2 group">
						<span class="text-sm text-gray-500">
							{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</span>
						<span class="text-[16px] text-gray-700 group-hover:text-black transition-colors">
							<a href="/blogs/{post.slug}" class="block group">
								{post.title}
							</a>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

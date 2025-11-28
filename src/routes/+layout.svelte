<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<div class="min-h-screen bg-[#f5f3f0]">
	<div class="grain-overlay"></div>
	{@render children()}
</div>

<style>
	.grain-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 0.4;
		background-image: 
			radial-gradient(circle at 20% 50%, transparent 0%, rgba(0, 0, 0, 0.015) 100%),
			radial-gradient(circle at 80% 80%, transparent 0%, rgba(0, 0, 0, 0.015) 100%),
			repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px);
		background-size: 200% 200%, 200% 200%, 3px 3px;
		animation: grain 8s steps(10) infinite;
	}

	@keyframes grain {
		0%, 100% { 
			background-position: 0% 0%, 100% 100%, 0 0;
		}
		10% { 
			background-position: 5% 10%, 95% 90%, 1px 1px;
		}
		20% { 
			background-position: 15% 5%, 85% 95%, -1px 0px;
		}
		30% { 
			background-position: 10% 15%, 90% 85%, 0px -1px;
		}
		40% { 
			background-position: 20% 10%, 80% 90%, 1px 0px;
		}
		50% { 
			background-position: 15% 20%, 85% 80%, 0px 1px;
		}
		60% { 
			background-position: 25% 15%, 75% 85%, -1px 1px;
		}
		70% { 
			background-position: 20% 25%, 80% 75%, 1px -1px;
		}
		80% { 
			background-position: 30% 20%, 70% 80%, 0px 0px;
		}
		90% { 
			background-position: 25% 30%, 75% 70%, 1px 1px;
		}
	}
</style>

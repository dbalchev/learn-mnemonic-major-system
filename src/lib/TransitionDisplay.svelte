<script>
	import { fly } from 'svelte/transition';

	export let changeKey;

	const flyX = -200;
	const flyDuration = 250;
	const flyInParams = { x: -flyX, duration: flyDuration, delay: flyDuration };
	const flyOutParams = { x: flyX, duration: flyDuration };
</script>

<div>
	{#each [changeKey] as key (key)}
		<div in:fly={flyInParams} out:fly={flyOutParams}>
			<slot />
		</div>
	{/each}
</div>

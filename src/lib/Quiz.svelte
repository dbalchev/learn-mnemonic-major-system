<script lang="ts">
	import SingleItem from './SingleItem.svelte';
	interface ItemDetails {
		prompt: string;
		answer: string;
	}
	export let allItems: Array<ItemDetails>;

	let currentIndex = 0;
	let nSuccesses = 0;
	let nFailures = 0;

	const onFinish = (e: CustomEvent<{ success: boolean }>) => {
		currentIndex += 1;
		if (e.detail.success) {
			nSuccesses += 1;
		} else {
			nFailures += 1;
		}
	};
</script>

<h1>quiz {currentIndex}</h1>
<div style="width:12em; height:8em">
	{#if currentIndex < allItems.length}
		{#each [allItems[currentIndex]] as currentItem (currentItem.prompt)}
			<SingleItem details={currentItem} on:finished={onFinish}></SingleItem>
		{/each}
	{:else}
		<p>no more quiz items</p>
	{/if}
</div>
<div>
	Successes: {nSuccesses}
	<br />
	Fails: {nFailures}
</div>

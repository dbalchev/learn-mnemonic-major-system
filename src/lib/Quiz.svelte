<script lang="ts">
	import SingleItem from './SingleItem.svelte';
	import TransitionDisplay from './TransitionDisplay.svelte';
	interface ItemDetails {
		prompt: string;
		answer: string;
	}
	export let allItems: Array<ItemDetails>;

	export let currentIndex = 0;
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
	<TransitionDisplay changeKey={currentIndex}>
		{#if currentIndex < allItems.length}
			<SingleItem details={allItems[currentIndex]} on:finished={onFinish} />
		{:else}
			<p>no more quiz items</p>
		{/if}
	</TransitionDisplay>
</div>
<div>
	Successes: {nSuccesses}
	<br />
	Fails: {nFailures}
</div>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import SingleItem from './SingleItem.svelte';
	interface ItemDetails {
		prompt: string;
		answer: string;
	}
	export let allItems: Array<ItemDetails>;

	let currentIndex = 0;
	let nSuccesses = 0;
	let nFailures = 0;

	const flyX = -200;
	const flyDuration = 500;
	const flyInParams = { x: -flyX, duration: flyDuration };
	const flyOutParams = { x: flyX, duration: flyDuration };

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
{#if currentIndex < allItems.length}
	{#each [allItems[currentIndex]] as currentItem (currentItem.prompt)}
		<div in:fly={flyInParams} out:fly={flyOutParams} animate:flip class="currentItem">
			<SingleItem details={currentItem} on:finished={onFinish}></SingleItem>
		</div>
	{/each}
{:else}
	<p>no more quiz items</p>
{/if}
<div>
	Successes: {nSuccesses}
	<br />
	Fails: {nFailures}
</div>

<style>
	.currentItem {
		display: inline-block;
	}
</style>

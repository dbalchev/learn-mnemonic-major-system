<script lang="ts">
	import SingleItem from '$lib/SingleItem.svelte';
	interface ItemDetails {
		prompt: string;
		answer: string;
	}
	let dispatchedFinishes: Array<ItemDetails> = [];
</script>

<SingleItem
	details={{ prompt: 'sample', answer: '0395' }}
	on:finished={(e) => {
		dispatchedFinishes = dispatchedFinishes.concat([e.detail]);
	}}
/>

<span>dispatches</span>
<ul>
	{#each dispatchedFinishes as finish}
		<li>{JSON.stringify(finish)}</li>
	{/each}
</ul>

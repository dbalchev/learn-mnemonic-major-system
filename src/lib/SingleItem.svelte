<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	interface ItemDetails {
		prompt: string;
		answer: string;
	}
	export let details: ItemDetails;
	let currentInput = '';
	let dispatch = createEventDispatcher<{ finished: { success: boolean } }>();
	let finishedState = '';
	$: {
		if (currentInput.length >= details.answer.length) {
			const success = currentInput === details.answer;
			dispatch('finished', {
				success: success
			});
			finishedState = success ? 'success' : 'fail';
		}
	}
	let inputRef: HTMLInputElement;
	onMount(() => {
		inputRef.focus();
	});

	const flyX = -200;
	const flyDuration = 500;
	const flyInParams = { x: -flyX, duration: flyDuration, delay: 510 };
	const flyOutParams = { x: flyX, duration: flyDuration };
</script>

<div
	class="box"
	in:fly={flyInParams}
	out:fly={flyOutParams}
	class:success={finishedState === 'success'}
	class:fail={finishedState === 'fail'}
>
	<h1>{details.prompt}</h1>
	<input type="text" pattern="[0-9]*" bind:value={currentInput} bind:this={inputRef} />
	<br />
</div>

<style>
	.box {
		border: black 1px solid;
		width: 11em;
		display: inline-block;
	}
	.success {
		background-color: rgb(193, 240, 193);
	}
	.fail {
		background-color: rgb(247, 203, 203);
	}
</style>

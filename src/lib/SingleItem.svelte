<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
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
</script>

<div class="box" class:success={finishedState === 'success'} class:fail={finishedState === 'fail'}>
	<h1>{details.prompt}</h1>
	<input type="text" pattern="[0-9]*" bind:value={currentInput} bind:this={inputRef} />
	<br />
</div>

<style>
	.box {
		border: black 1px solid;
		width: fit-content;
	}
	.success {
		background-color: rgb(193, 240, 193);
	}
	.fail {
		background-color: rgb(247, 203, 203);
	}
</style>

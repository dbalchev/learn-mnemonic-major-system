<script>
	import Quiz from '$lib/Quiz.svelte';
	import { onMount } from 'svelte';
	let currentItem = 0;
	onMount(() => {
		const intervalHandle = setInterval(() => {
			currentItem = (currentItem + 1) % 2;
		}, 2_000);
		return () => {
			clearInterval(intervalHandle);
		};
	});
	let items = [
		{
			prompt: 'first',
			answer: '8401'
		},
		{
			prompt: 'second',
			answer: '0721'
		}
	];
</script>

<Quiz allItems={items} currentIndex={currentItem}></Quiz>

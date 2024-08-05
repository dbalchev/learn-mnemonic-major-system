<script lang="ts">
	import { page } from '$app/stores';
	import { PEGS } from '$lib/pegs';
	import Quiz from '$lib/Quiz.svelte';
	import { onMount } from 'svelte';
	const shuffledPegs = PEGS.map((peg) => ({ ...peg, sortKey: Math.random() })).sort(
		(lh, rh) => lh.sortKey - rh.sortKey
	);
	let items = shuffledPegs.map((peg) => ({ prompt: peg.word, answer: peg.digits }));
	onMount(() => {
		if ($page.url.searchParams.get('type') === 'testing') {
			items = [
				{ prompt: 'test', answer: '101' },
				{ prompt: 'spec', answer: '097' }
			];
		}
	});
</script>

<Quiz allItems={items} />

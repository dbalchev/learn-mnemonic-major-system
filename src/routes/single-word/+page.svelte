<script lang="ts">
	import { PEGS } from "$lib/pegs";
	import Quiz from "$lib/Quiz.svelte";

    const shuffledPegs = PEGS.map(peg => ({...peg, sortKey: Math.random()})).sort((lh, rh) => lh.sortKey - rh.sortKey)
    const items = shuffledPegs.map(peg => ({prompt: peg.word, answer: peg.digits}))

</script>

<Quiz allItems={items}/>

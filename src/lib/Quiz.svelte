<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
	import SingleItem from './SingleItem.svelte';
    let keys = [0]
    // let currentKey = 0
    onMount(() => {
        const intervalHandle = setInterval(() => {
            // currentKey = currentKey + 1;
            keys = [keys[0] + 1]
        }, 2_000)
        return () => {
            clearInterval(intervalHandle)
        }
    })
    const flyX = -200
    const flyDuration = 500
    const flyInParams = {x: -flyX, duration: flyDuration}
    const flyOutParams = {x: flyX, duration: flyDuration}
</script>
<h1>quizz {keys[0]}</h1>
{#each keys as currentKey(currentKey)}
<div in:fly={flyInParams} out:fly={flyOutParams} animate:flip class="currentItem">
    <SingleItem prompt={currentKey.toString()}></SingleItem>
</div>

{/each}
<style>
    .currentItem {
        display: inline-block;
    }
</style>
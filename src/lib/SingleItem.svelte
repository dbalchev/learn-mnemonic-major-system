<script>
    import { createEventDispatcher } from 'svelte';
    
    export let prompt;
    let currentInput = '';
</script>

<div class="box">
    <h1>{prompt}</h1>
    <input type="number" bind:value={currentInput} />
    <br />
    {currentInput}
</div>

<style>
    .box {
        border: black 1px solid;
        width: fit-content;
    }
</style>

<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    interface ItemDetails {
        prompt: string
        answer: string
    }
    export let details: ItemDetails
    let currentInput = ''
    let dispatch = createEventDispatcher()
    // let updates:any[] = []
    let additionalClass = ''
    // $: 
    $: {
        // updates = updates.concat([{
        //     'new': currentInput, 
        //     'currentInput.length': currentInput.length,
        //     'details.answer.length': details.answer.length,
        // }])
        if (currentInput.length >= details.answer.length) {
            const success = currentInput === details.answer
            dispatch('finished', {
                'success': success
            })
            additionalClass = success ? 'success' : 'fail'
        }
    }
    let inputRef: HTMLInputElement;
    onMount(() => {
        inputRef.focus()
    })
</script>

<div class="box {additionalClass}">
    <h1>{details.prompt}</h1>
    <input type="text" pattern="[0-9]*" bind:value={currentInput} bind:this={inputRef}/>
    <br />
    <!-- {currentInput} -->
    <!-- {#each updates as update}
        {JSON.stringify(update)}
    {/each} -->
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

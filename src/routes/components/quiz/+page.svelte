<script>
    import Quiz from "$lib/Quiz.svelte";
    // let currentItem = 0;
    // onMount(() => {
    //     const intervalHandle = setInterval(() => {
    //         currentItem += 1
    //     }, 2_000)
    //     return () => {
    //         clearInterval(intervalHandle)
    //     }
    // })
    let items = [
        {
            'prompt': 'first',
            'answer': '8401',
        },
        {
            'prompt': 'second',
            'answer': '0721',
        }
    ]
</script>
<Quiz allItems={items}></Quiz>
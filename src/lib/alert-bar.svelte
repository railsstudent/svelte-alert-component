<script lang="ts">
    type Props = {
        configs: { 
            styleLabel: string
            styles: { text: string, value: string }[]
            directionLabel: string
            directions: { text: string, value: string }[]
        };
        hasCloseButton: boolean;
        style: string;
        direction: string;
    }

    const { configs }: Props = $props();

    let hasCloseButton = $state(true);
    let style = $state('color')
    let direction = $state('horizontal')
</script>

<div>
    <p class="mb-[0.75rem]">
        <span>Has close button?</span>
        <input type="checkbox" class="mr-[0.5rem]" bind:checked={hasCloseButton} /> { hasCloseButton }
        <span>{ configs.styleLabel }&nbsp;&nbsp;</span> { style }
        <select class="select select-info mr-[0.5rem]" bind:value={style}>
            {#each configs.styles as s (s.value) }
                <option value={s.value}>
                    { s.text }
                </option>
            {/each}
        </select>
        <span>{ configs.directionLabel }&nbsp;&nbsp;</span> { direction }
        <select class="select select-info mr-[0.5rem]" bind:value={direction}> 
            {#each configs.directions as d (d.value)}
                <option value={d.value}>
                    { d.text }
                </option>
            {/each}
        </select>
    </p>
</div>

<script lang="ts">
    type Props = {
        label: string;
        items: { text: string, value: string }[];
        selectedValue: string;
    }

    let { label, items, selectedValue = $bindable() }: Props = $props();
</script>

<span>{ label }&nbsp;&nbsp;</span>
<select class="select select-info mr-[0.5rem]" bind:value={selectedValue}>
    {#each items as item (item.value) }
        <option value={item.value}>
            { item.text }
        </option>
    {/each}
</select>

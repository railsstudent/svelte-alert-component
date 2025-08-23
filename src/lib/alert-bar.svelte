<script lang="ts">
	import { capitalize } from './capitalize';
    import OpenIcon from './icons/open-icon.svelte';

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
        closedNotifications: string[];
    }

    let { 
        hasCloseButton = $bindable(), 
        style = $bindable(), 
        direction = $bindable(), 
        closedNotifications = $bindable(),
        configs 
    }: Props = $props();

    function getBtnClass(type: string) {
        return {
            info: 'btn-info',
            warning: 'btn-warning',
            error: 'btn-error',
            success: 'btn-success'
        }[type]
    }
    
    function removeNotification(type: string) {
     closedNotifications = closedNotifications.filter((t) => t !== type)
    }
</script>

<div>
    <p class="mb-[0.75rem]">
        <span>Has close button?</span>
        <input type="checkbox" class="mr-[0.5rem]" bind:checked={hasCloseButton} />
        <span>{ configs.styleLabel }&nbsp;&nbsp;</span> { style }
        <select class="select select-info mr-[0.5rem]" bind:value={style}>
            {#each configs.styles as s (s.value) }
                <option value={s.value}>
                    { s.text }
                </option>
            {/each}
        </select>
        <span>{ configs.directionLabel }&nbsp;&nbsp;</span>
        <select class="select select-info mr-[0.5rem]" bind:value={direction}> 
            {#each configs.directions as d (d.value)}
                <option value={d.value}>
                    { d.text }
                </option>
            {/each}
        </select>
    </p>
    <p class="mb-[0.75rem]">
        {#each closedNotifications as type (type)}
            <button
                class={getBtnClass(type) + ' mr-[0.5rem] btn'}
                onclick={() => removeNotification(type)}
            >
                <OpenIcon />{ capitalize(type) }
            </button>    
        {/each}
        {#if closedNotifications.length > 0}
            <button
                class="btn btn-primary" 
                onclick={() => closedNotifications = []}>
                Open all alerts
            </button>
        {/if}
      </p>
</div>

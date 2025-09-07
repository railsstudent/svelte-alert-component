<script lang="ts">
	import { capitalize } from './capitalize';
    import OpenIcon from './icons/open-icon.svelte';
    import AlertDropdown from './alert-dropdown.svelte';
    import { 
        getClosedNotification, 
        removeNotification, 
        removeAllNotifications, 
        isNotEmpty 
    } from './stores/notification.svelte';

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

    let { 
        hasCloseButton = $bindable(), 
        style = $bindable(), 
        direction = $bindable(), 
        configs 
    }: Props = $props();

    const closedNotifications = getClosedNotification();

    function getBtnClass(type: string) {
        return {
            info: 'btn-info',
            warning: 'btn-warning',
            error: 'btn-error',
            success: 'btn-success'
        }[type]
    }
</script>

<div>
    <p class="mb-[0.75rem]">
        <span>Has close button?</span>
        <input type="checkbox" class="mr-[0.5rem]" bind:checked={hasCloseButton} />
        <AlertDropdown label={configs.styleLabel} items={configs.styles} bind:selectedValue={style} />
        <AlertDropdown label={configs.directionLabel} items={configs.directions} bind:selectedValue={direction} />
    </p>
    <p class="mb-[0.75rem]">
        {#each closedNotifications() as type (type)}
            <button
                class={getBtnClass(type) + ' mr-[0.5rem] btn'}
                onclick={() => removeNotification(type)}
            >
                <OpenIcon />{ capitalize(type) }
            </button>    
        {/each}
        {#if isNotEmpty()}
            <button
                class="btn btn-primary" 
                onclick={removeAllNotifications}>
                Open all alerts
            </button>
        {/if}
    </p>
</div>

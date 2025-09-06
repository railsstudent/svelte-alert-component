<script lang="ts">
	import { capitalize } from './capitalize';
    import OpenIcon from './icons/open-icon.svelte';
    import AlertDropdown from './alert-dropdown.svelte';

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

    function clearAllNotifications() {
        closedNotifications = []
    }

    function hasClosedNotifications() {
        return closedNotifications.length > 0
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
        {#each closedNotifications as type (type)}
            <button
                class={getBtnClass(type) + ' mr-[0.5rem] btn'}
                onclick={() => removeNotification(type)}
            >
                <OpenIcon />{ capitalize(type) }
            </button>    
        {/each}
        {#if hasClosedNotifications()}
            <button
                class="btn btn-primary" 
                onclick={clearAllNotifications}>
                Open all alerts
            </button>
        {/if}
      </p>
</div>

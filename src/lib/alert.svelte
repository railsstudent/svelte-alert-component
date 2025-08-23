<script lang="ts">
    import InfoIcon from '$lib/icons/info-icon.svelte'
    import ErrorIcon from '$lib/icons/error-icon.svelte'
    import SuccessIcon from '$lib/icons/success-icon.svelte'
    import WarningIcon from '$lib/icons/warning-icon.svelte'
    import CloseIcon from '$lib/icons/close-icon.svelte'
    import type { Snippet } from 'svelte';
	import type { AlertMessage } from './alert.type';

type Props = {
    alert: AlertMessage;
    alertMessage: Snippet<[string]>;
    notifyClosed?: (type: string) => void;
    hasCloseButton: boolean;
    style: string;
    direction: string;
}

const { 
    alert, 
    alertMessage, 
    notifyClosed, 
    hasCloseButton, 
    direction, 
    style 
}: Props = $props();

const alertColor = $derived.by(() => ({
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
}[alert.type]));

const alertDirection = $derived.by(() => ({
    horizontal: 'alert-horizontal',
    vertical: 'alert-vertical',
}[direction]));

const alertStyle = $derived.by(() => ({
    color: '',
    soft: 'alert-soft',
    outline: 'alert-outline',
    dash: 'alert-dash',
}[style]));

const alertClasses = $derived(`alert ${alertColor} ${alertDirection} ${alertStyle} mb-[0.75rem]`);

const Icon = $derived.by(() => ({
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
}[alert.type]));

let closed = $state(false);

function closeAlert() {
    closed = true;
    notifyClosed?.(alert.type)
}

</script>

{#if !closed}
    <div role="alert" class={alertClasses}>
        <Icon ></Icon>
        {@render alertMessage(alert.message) }
        {#if hasCloseButton} 
            <div>
                <button class="btn btn-sm btn-primary" title="Close button" onclick={closeAlert}>
                    <CloseIcon />
                </button>
            </div>
        {/if}
    </div>
{/if}
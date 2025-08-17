<script lang="ts">
    import InfoIcon from '$lib/info-icon.svelte'
    import ErrorIcon from '$lib/error-icon.svelte'
    import SuccessIcon from '$lib/success-icon.svelte'
    import WarningIcon from '$lib/warning-icon.svelte'
    import CloseIcon from '$lib/close-icon.svelte'
    import type { Snippet } from 'svelte';
	import type { AlertMessage } from './alert.type';

type Props = {
    alert: AlertMessage;
    alertMessage: Snippet<[string]>;
    notifyClosed?: (type: string) => void;
}

const { alert, alertMessage, notifyClosed }: Props = $props();

const alertStyle = $derived.by(() => ({
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
}[alert.type]));

const alertClasses = $derived(`alert ${alertStyle} mb-[0.75rem]`);

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
        <div>
            <button class="btn btn-sm btn-primary" title="Close button" onclick={closeAlert}>
                <CloseIcon />
            </button>
        </div>
    </div>
{/if}
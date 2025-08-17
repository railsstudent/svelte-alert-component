<script lang="ts">
    import InfoIcon from '$lib/info-icon.svelte'
    import ErrorIcon from '$lib/error-icon.svelte'
    import type { Snippet } from 'svelte';
	import type { AlertMessage } from './alert.type';

type Props = {
    alert: AlertMessage;
    alertMessage: Snippet<[string]>;
}

const { alert, alertMessage }: Props = $props();

const alertStyle = $derived.by(() => ({
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
}[alert.type]));

const alertClasses = $derived(`alert ${alertStyle}`);

</script>

<div role="alert" class={alertClasses}>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg> -->
    <InfoIcon />
    {@render alertMessage(alert.message) }
</div>
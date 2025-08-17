<script lang="ts">
    import Alert from './alert.svelte';
	import type { AlertMessage } from './alert.type';

    type Props = {
        alerts: AlertMessage[];
    }

    const { alerts }: Props = $props()
</script>

{#snippet alertMessage(text: string)}
    <span>{text}</span>
{/snippet}

{#each alerts as alert (alert.type) } 
    <Alert {alert} {alertMessage} />
{/each}

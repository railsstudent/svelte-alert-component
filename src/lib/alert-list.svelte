<script lang="ts">
    import Alert from './alert.svelte';
	import type { AlertMessage } from './alert.type';

    type Props = {
        alerts: AlertMessage[];
    }

    const { alerts }: Props = $props()

    function notifyClosed(type: string) {
        console.log(`Alert of type ${type} closed`);
    }
</script>

{#snippet alertMessage(text: string)}
    <span>{text}</span>
{/snippet}

{#each alerts as alert (alert.type) } 
    <Alert {alert} {alertMessage} {notifyClosed} />
{/each}

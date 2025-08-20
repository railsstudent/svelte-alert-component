<script lang="ts">
	import AlertBar from './alert-bar.svelte';
    import Alert from './alert.svelte';
	import type { AlertMessage } from './alert.type';

    type Props = {
        alerts: AlertMessage[];
    }

    const { alerts }: Props = $props()

    const configs = $state({
        styleLabel: 'Alert style: ',
        styles: [
            { text: 'Default', value: 'color' },
            { text: 'Soft', value: 'soft' },
            { text: 'Outline', value: 'outline' },
            { text: 'Dash', value: 'dash' }
        ],
        directionLabel: "Alert direction:",
        directions: [
            { text: 'Horizontal', value: 'horizontal' },
            { text: 'Vertical', value: 'vertical' },
        ]
    });

    function notifyClosed(type: string) {
        console.log(`Alert of type ${type} closed`);
    }
</script>

{#snippet alertMessage(text: string)}
    <span>{text}</span>
{/snippet}

<h2>Alert Components (Svelte ver.)</h2>

<AlertBar {configs}  />

{#each alerts as alert (alert.type) } 
    <Alert {alert} {alertMessage} {notifyClosed} />
{/each}

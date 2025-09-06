<script lang="ts">
	import AlertBar from './alert-bar.svelte';
	import Alert from './alert.svelte';
	import type { AlertMessage } from './alert.type';
	import { addNotification, getClosedNotification } from './stores/notification.svelte';

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

    let hasCloseButton = $state(true);
    let style = $state('color');
    let direction = $state('horizontal');
    const closedNotifications  = getClosedNotification();
    let filteredNotifications = $derived.by(() => 
        alerts.filter(alert => !closedNotifications().includes(alert.type))
    );

    const alertConfig = $derived({
        hasCloseButton,
        style,
        direction,
    });
</script>

{#snippet alertMessage(text: string)}
    <span>{text}</span>
{/snippet}

<h2>Alert Components (Svelte ver.)</h2>

<AlertBar {configs} 
    bind:hasCloseButton={hasCloseButton} 
    bind:style={style}
    bind:direction={direction}
/>

{#each filteredNotifications as alert (alert.type) } 
    <Alert {alert} {alertMessage} notifyClosed={() => addNotification(alert.type)} {alertConfig} />
{/each}

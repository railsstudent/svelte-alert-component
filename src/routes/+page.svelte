<script lang="ts">
	import AlertList from '$lib/alert-list.svelte';
	import { ALERTS } from '$lib/alert.const';
	import type { AlertMessage } from '$lib/alert.type';

	const alerts = $state<AlertMessage[]>(ALERTS)
</script>

<main>
	<AlertList alerts={alerts} />
</main>

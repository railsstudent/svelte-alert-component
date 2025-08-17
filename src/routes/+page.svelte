<script lang="ts">
	import AlertList from '$lib/alert-list.svelte';
	import type { AlertMessage } from '$lib/alert.type';

	const alerts = $state<AlertMessage[]>([
		{
			type: 'info',
			message: 'New software update available.'
		},
		{
			type: 'success',
			message: 'Your purchase has been confirmed!'
		},
		{
			type: 'warning',
			message: 'Warning: Invalid email address!'
		},
		{
			type: 'error',
			message: 'Error! Task failed successfully.'
		}
	])
</script>

<main>
	<AlertList alerts={alerts} />
</main>

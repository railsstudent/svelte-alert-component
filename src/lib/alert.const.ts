import type { AlertMessage } from '$lib/alert.type';

export const ALERTS: AlertMessage[] = [
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
]

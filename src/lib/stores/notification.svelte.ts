const state = $state({
    closedNotifications: [] as string[]
});

const closedNotifications = $derived(() => state.closedNotifications);

export function getClosedNotification() {
    return closedNotifications;
}

export function removeNotification(type: string) {
    state.closedNotifications = state.closedNotifications.filter((t) => t !== type);
}

export function removeAllNotifications() {
    state.closedNotifications = [];
}

export function isNotEmpty() {
    return state.closedNotifications.length > 0
}

export function addNotification(type: string) {
    state.closedNotifications.push(type);
}

export function formatTime(timestamp) {
    return new Date(timestamp * 1000)
        .toLocaleTimeString([], {
            hour: "numeric",
            minute: '2-digit'
        })
}

export function formatDuration(startAt, endAt) {
    const totalMinutes = (endAt - startAt) / 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours}h ${minutes}m`;
    }

    if (hours > 0) {
        return `${hours}h`;
    }

    return `${minutes}m`
}

export function isSameDay(timestamp, date) {
    const taskDate = new Date(timestamp * 1000);

    return (
        taskDate.toDateString() === date.toDateString()
    );
}
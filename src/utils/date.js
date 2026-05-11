export function formatTime(timestamp) {
    return new Date(timestamp * 1000)
        .toLocaleTimeString([], {
            hour: "numeric",
            minute: '2-digit'
        })
}

export function getTaskDuration(task) {
    return task.endAt - task.startAt;
}

export function getTotalTaskDuration(tasks) {
    return tasks.reduce((sum, task) => {
        if (isAllDayTask(task)) {
            return sum;
        }
        return sum + getTaskDuration(task);
    }, 0);
}

export function formatDuration(seconds) {
    const totalMinutes = Math.floor(seconds / 60);
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

export function isAllDayTask(task) {
    const start = new Date(task.startAt * 1000);
    const end = new Date(task.endAt * 1000);

    return (
        start.getHours() === 0 &&
        start.getHours() === 0 &&
        (
            end.getHours() == 23 ||
            end.getDate() !== start.getDate()
        )
    )
}
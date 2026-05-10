<script setup>
defineProps({
    task: Object,
});

function formatTime(timestamp) {
    return new Date(timestamp * 1000)
        .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
        });
}
</script>

<template>
    <div class="task-card">
        <h3>{{ task.content }}</h3>

        <p>
            {{ formatTime(task.startAt) }}
            -
            {{ formatTime(task.endAt) }}
        </p>
    </div>
</template>
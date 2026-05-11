<script setup>
import { formatTime, formatDuration, getTaskDuration } from '../utils/date';
import { compactTaskContent } from '../utils/text';

defineProps({
    task: Object,
});

</script>

<template>
    <div class="task-card">
        <div class="task-header">
            <span class="task-time">
                {{ formatTime(task.startAt) }}
            </span>

            <span class="task-duration">{{ formatDuration(getTaskDuration(task)) }}</span>
        </div>

        <h3 class="task-title">
            {{ compactTaskContent(task.content) }}
        </h3>

        <div class="task-footer">
            <span class="task-tag">Planning</span>
        </div>
    </div>
</template>

<style scoped>
.task-card {
    background: var(--bg-card);
    border: 1px solid #eceae7;
    border-radius: var(--border-primary);
    padding: 14px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: var(--transition-normal);
    cursor: pointer;
}

.task-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-1px);
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-time {
    background: #f6c667;
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 6px;
}

.task-duration {
    font-size: 12px;
    color: #8d8b87;
    background: #f3f2f0;
    padding: 4px 8px;
    border-radius: 6px;
}

.task-title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.task-footer {
    display: flex;
    justify-content: flex-end;
}

.task-tag {
    font-size: 13px;
    color: #8d8b87;
}
</style>
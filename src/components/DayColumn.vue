<script setup>
import { computed } from 'vue';
import Taskcard from './Taskcard.vue';
import { Plus } from 'lucide-vue-next';
import { isSameDay, formatTime, formatDuration, getTotalTaskDuration } from '../utils/date';

const props = defineProps({
    date: Date,
    tasks: Array,
})

const dayTasks = computed(() => {
    return props.tasks.filter(task => {
        return isSameDay(task.startAt, props.date);
    });
});

const formattedDate = computed(() => {
    return props.date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
    });
});

const totalTaskDuration = computed(() => {     
    return formatDuration(getTotalTaskDuration(dayTasks.value))
})

</script>

<template>
    <div class="day-column">
        <h1>{{ formattedDate }}</h1>
        <div class="add-task">
            <button><Plus :size="16"></Plus> Add task</button>
            <p>{{ totalTaskDuration }}</p>
        </div>

        <Taskcard
            v-for="task in dayTasks"
            :key="task.startAt"
            :task="task"
        />
    </div>
</template>

<style scoped>

.day-column {
    min-width: 300px;
    background: var(--bg-card);
    border-radius: var(--radius-md);
    padding: 16px;
}

.add-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border-primary);
    padding: 0px 10px;
}

.add-task button {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 16px;
}

.add-task button:hover {
    border-color: var(--border-hover);
    transform: translateY(1px);
    color: var(--text-primary);
}

.add-task p {
    background: var(--bg-secondary);
    padding: 0px 5px;
    text-align: center;
    color: var(--text-secondary);
    border-radius: var(--radius-sm);
}
</style>
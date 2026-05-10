<script setup>
import { computed } from 'vue';
import Taskcard from './Taskcard.vue';

const props = defineProps({
    date: Date,
    tasks: Array,
})

function isSameDay(timestamp, date) {
    const taskDate = new Date(timestamp * 1000);

    return (
        taskDate.toDateString() === date.toDateString()
    );
}

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
</script>

<template>
    <div class="day-column">
        <h1>{{ formattedDate }}</h1>
        <button>Add task</button>

        <Taskcard
            v-for="task in dayTasks"
            :key="task.startAt"
            :task="task"
        />
    </div>
</template>
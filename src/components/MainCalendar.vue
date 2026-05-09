<script setup>
import { computed, ref } from 'vue';
import DayColumn from './DayColumn.vue';

const daysToShow = 3;

const startOffset = ref(0)

const dates = computed(() => {
    return Array.from({ length: daysToShow }, (_, index) => {
        const date = new Date();

        date.setDate(
            date.getDate() + startOffset.value + index
        )

        return {
            fullDate: date,
            label: date.toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
            }),
            isToday: startOffset.value + index === 0,
        };
    })
}) 

function nextDays() {
    startOffset.value++;
}

function previousDays() {
    startOffset.value--;
}
</script>

<template>
    <div>
        <button @click="previousDays">Previous</button>
        <button @click="nextDays">Next</button>
    </div>
    <div class="main-container">
        <div class="task-container">
            <DayColumn v-for="date in dates" :key="date.label" :title="date.label" :today="date.isToday" />
        </div>
        <div class="sidebar-container">
            <h1>Sidebar</h1>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
}

.main-container {
    display: flex;
    min-height: 100vh;

    background: #f9f9f8;
    color: #1a1a18;
    font-family: system-ui, sans-serif;
}

.task-container {
    display: flex;
    gap: 20px;

    overflow-x: auto;

    flex: 1;
    padding: 20px;
}

.day-column {
    min-width: 300px;
    background: white;
    border-radius: 12px;
    padding: 16px;
}

.sidebar-container {
    width: 200px;

    background: 20px;
    padding: 20px;
    border-left: 1px solid #ddd;
}
</style>
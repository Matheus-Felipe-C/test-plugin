<script setup>
import { computed, ref } from 'vue';
import DayColumn from './DayColumn.vue';
import Taskcard from './Taskcard.vue';
import { Plus, Minus } from 'lucide-vue-next';

let tasks = [
    {
        content: "Review project roadmap",
        deadline: 1778467200,
        startAt: 1778470800,
        endAt: 1778474400,
    },
    {
        content: "Morning workout",
        deadline: null,
        startAt: 1778478000,
        endAt: 1778481600,
    },
    {
        content: "Write weekly planning notes",
        deadline: 1778485200,
        startAt: 1778485200,
        endAt: 1778488800,
    },
    {
        content: "Team sync meeting",
        deadline: 1778553600,
        startAt: 1778557200,
        endAt: 1778560800,
    },
    {
        content: "Study Vue components",
        deadline: null,
        startAt: 1778564400,
        endAt: 1778571600,
    },
    {
        content: "Refactor task card UI",
        deadline: 1778575200,
        startAt: 1778575200,
        endAt: 1778580600,
    },
    {
        content: "Read Amplenote plugin docs",
        deadline: null,
        startAt: 1778643600,
        endAt: 1778649000,
    },
    {
        content: "Design sidebar interactions",
        deadline: 1778652600,
        startAt: 1778652600,
        endAt: 1778659800,
    },
    {
        content: "Answer emails",
        deadline: null,
        startAt: 1778663400,
        endAt: 1778667000,
    },
    {
        content: "Plan next sprint",
        deadline: 1778670600,
        startAt: 1778670600,
        endAt: 1778677800,
    },
]

const daysToShow = 3;

const startOffset = ref(0)

const dates = computed(() => {
    return Array.from({ length: daysToShow }, (_, index) => {
        const date = new Date();

        date.setDate(
            date.getDate() + startOffset.value + index
        )

        return date;
    })
}) 

function nextDays() {
    startOffset.value++;
}

function previousDays() {
    startOffset.value--;
}

function resetDays() {
    startOffset.value = 0;
}
</script>

<template>
    <div class="navigation-btn">
        <button @click="previousDays"><Minus :size="16"></Minus></button>
        <button @click="nextDays"><Plus :size="16"></Plus></button>
        <button @click="resetDays">Today</button>
    </div>
    <div class="main-container">
        <div class="task-container">
            <DayColumn 
                v-for="date in dates" 
                :key="date.toISOString()" 
                :date="date" 
                :tasks="tasks"
                >
            </DayColumn>
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


.sidebar-container {
    width: 200px;

    background: 20px;
    padding: 20px;
    border-left: 1px solid #ddd;
}

.navigation-btn {
    margin-top: 12px;
    margin-left: 12px;
    display: flex;
    gap: 8px;
    padding: 12px 20px;
}

.navigation-btn button {
    background: white;
    border: 1px solid #eceae7;
    width: 60px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.navigation-btn button:hover {
    background: #f3f2f0;
    border-color: #d6d3cf;
    transform: translateY(-1px);
}

.navigation-btn button:active {
    transform: translateY(0);
}
</style>
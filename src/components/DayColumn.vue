<script setup>
defineProps({
    title: String,
    today: Boolean,
})
</script>

<template>
    <div class="day-column">
        <h1>
            {{ title }}
            <span v-if="today">(today)</span>
        </h1>

        <slot></slot>
    </div>
</template>
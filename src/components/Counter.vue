<!-- src/Counter.vue -->
<template>
  <main>
    <h1>Counter</h1>
    <p class="value">{{ count }}</p>
    <div class="controls">
      <button @click="decrement">−</button>
      <button @click="reset" class="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

async function notify() {
  const msg = await window.callAmplenotePlugin("countChanged", count.value);
  console.log("Plugin replied:", msg);
}

function increment() { count.value++; notify(); }
function decrement() { count.value--; notify(); }
function reset()     { count.value = 0; notify(); }
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f9f9f8;
  color: #1a1a18;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 1rem;
  font-weight: 500;
  color: #888;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.value {
  font-size: 5rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  line-height: 1;
  color: #1a1a18;
}

.controls {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1.25rem;
  font-size: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: background 0.15s;
}

button:hover { background: #f0f0ef; }

button.reset {
  font-size: 0.85rem;
  color: #888;
  padding: 0.5rem 1rem;
}
</style>
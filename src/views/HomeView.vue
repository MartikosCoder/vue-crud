<script setup lang="ts">
  import TodoItem from '@/components/TodoItem.vue';
  import { RouterLink } from 'vue-router';
  import { useTodos } from '@/stores/todos'

  const { todos } = useTodos();
</script>

<template>
  <main class="mx-4 my-3">
    <nav>
      <RouterLink
        to="/add"
        class="mx-auto w-1/4 bg-green-500 text-white hover:bg-green-600 transition-all px-4 py-3 rounded-full text-lg font-bold flex justify-center items-center">+
        Добавить</RouterLink>
    </nav>
    <ul class="mt-4 flex flex-col justify-between">
      <TodoItem v-for="todo in todos" :todo="todo" />
    </ul>
  </main>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { RouterView } from 'vue-router'
  import { useTodos } from './stores/todos';

  const todosStore = useTodos();
  watch(todosStore.$state, (state) => {
    localStorage.setItem('state', JSON.stringify(state))
  }, { deep: true })
</script>

<template>
  <header class="inset-x-0 top-0 px-4 py-2 flex items-center bg-green-200">
    <img alt="Vue logo" class="w-12 h-12" src="@/assets/logo.svg" />
    <h1 class="ml-4 font-bold text-xl">Тестовое приложение для записок</h1>
  </header>
  <RouterView />
</template>

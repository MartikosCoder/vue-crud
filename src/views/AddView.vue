<script setup lang="ts">
  import { ref } from 'vue';
  import { useTodos } from '@/stores/todos';
  import { useRouter } from 'vue-router';

  const { addTodo } = useTodos();
  const { push } = useRouter();

  const title = ref("");

  const submitTodo = () => {
    if(!title.value.length) {
      alert("Введите название карточки!");
      return;
    }

    addTodo(title.value);
    push('/');
  }
</script>

<template>
  <form class="mx-4 my-3 flex flex-col" @submit.prevent="submitTodo">
    <input v-model="title" class="border-b-2 p-2 outline-none text-2xl" type="text" placeholder="Название карточки">
    <button class="mt-4 mx-auto w-1/4 bg-green-500 text-white hover:bg-green-600 transition-all px-4 py-3 rounded-full text-lg font-bold flex justify-center items-center" type="submit">Добавить</button>
  </form>
</template>

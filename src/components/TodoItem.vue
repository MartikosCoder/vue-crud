<script setup lang="ts">
    import type { Todo } from '@/utils/types';
    import { useTodos } from '@/stores/todos'

    const { checkTodo, removeTodo } = useTodos();

    const props = defineProps<{
        todo: Todo,
        is_first?: Boolean
    }>();
</script>

<template>
    <li class="flex items-center w-full justify-between border-b-2 p-4 border-black" :class="{'mt-8': !props.is_first}">
        <h2 class="w-3/4 overflow-hidden whitespace-nowrap text-ellipsis text-2xl" :class="{'line-through font-bold': props.todo.is_finished}">{{ props.todo.title }}</h2>
        <div class="flex justify-between w-24 ml-2">
            <input type="checkbox" :checked="(props.todo.is_finished as any)" @click="checkTodo(props.todo.id)"
                class="w-10 h-10 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <svg @click="removeTodo(props.todo.id)" version="1.1" class="w-10 h-10 cursor-pointer fill-red-500 hover:fill-red-600 transition-all"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 27.965 27.965" style="enable-background:new 0 0 27.965 27.965;" xml:space="preserve">
                <g>
                    <g id="c142_x">
                        <path
                            d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982
			C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78
			l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782
			c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z" />
                    </g>
                    <g id="Capa_1_104_">
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        </div>
    </li>
</template>
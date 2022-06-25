export type Todo = {
    id: number,
    title: String,
    is_finished: Boolean
};

export type RootTodoState = {
    todos: Todo[],
    next_id: number
};
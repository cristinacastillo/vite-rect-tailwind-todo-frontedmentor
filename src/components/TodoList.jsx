import { Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4"
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
        >
          {todos.map((todo, index) => (
            <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;

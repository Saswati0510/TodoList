import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
/* import { nanoid } from "nanoid"; */
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('locally_stored_todos')) || []);
  useEffect(() => {
    localStorage.setItem('locally_stored_todos', JSON.stringify(todos))
  }, [todos]);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))

  }
  const addTodo = (todo) => {
    setTodos([...todos, todo])

  }

  const ChangeTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, body: text } : todo)))
  }

  return (

    <VStack m={4}>
      <IconButton alignSelf='flex-end' icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} isRound='true' size='lg' onClick={toggleColorMode}></IconButton>
      <Heading paddingBottom={10} bgGradient='linear(to-r,pink.500, pink.300,blue.500)' bgClip='text' fontWeight='extrabold' size='2xl'>Todo Application</Heading>
      <TodoList todos={todos} handleDelete={handleDelete} ChangeTodo={ChangeTodo}></TodoList>
      <CreateTodo addTodo={addTodo}></CreateTodo>
    </VStack>
  );
}

export default App;

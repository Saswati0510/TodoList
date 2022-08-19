import { VStack, StackDivider, Badge } from '@chakra-ui/react'
import React from 'react'
import OneTodo from './OneTodo';

const TodoList = ({ todos, handleDelete, ChangeTodo }) => {

    return (
        <>
            {
                !todos.length ? (
                    <Badge colorScheme='green' borderRadius={4} p='2'>No todos!!</Badge>
                ) : (<VStack
                    p={4}
                    borderColor='grey.300'
                    borderWidth='2px'
                    borderRadius='lg'
                    divider={<StackDivider />}
                    w='100%'
                    maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                    alignItems='stretch'
                >
                    {
                        todos.map((todo) => (
                            <OneTodo key={todo.id} todo={todo} handleDelete={handleDelete} ChangeTodo={ChangeTodo}></OneTodo>
                        ))
                    }
                </VStack>)
            }
        </>
    )
}

export default TodoList
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from "nanoid";

const CreateTodo = ({ addTodo }) => {
    const toast = useToast();
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'Empty todo!',
                description: "Plese enter something to create a todo",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return;
        }

        addTodo({ id: nanoid(), body: content });
        setContent('')


    }
    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input variant='filled' placeholder='create a todo!' value={content} onChange={(e) => setContent(e.target.value)} />
                <Button colorScheme='pink' px='8' type='submit'>create todo</Button>
            </HStack>

        </form>
    )
}

export default CreateTodo
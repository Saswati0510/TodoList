
import { HStack, Text, IconButton, Spacer, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

const OneTodo = ({ todo, handleDelete, ChangeTodo }) => {
    const toast = useToast();
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.body);
    const [ticked, setTicked] = useState(false);

    const handleEdit = (e, id) => {
        e.preventDefault();
        if (!editTodo) {
            toast({
                title: 'Empty todo!',
                description: "Plese enter something to edit a todo",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return;
        }

        ChangeTodo(id, editTodo);
        setEdit(false);

    }

    return (
        <HStack key={todo.id}>
            {
                edit ? (<form onSubmit={(e) => handleEdit(e, todo.id)}>
                    <Input value={editTodo} onChange={(e) => setEditTodo(e.target.value)}></Input>
                </form>) :
                    ticked ? (<s>{todo.body}</s>) : (<Text>{todo.body}</Text>)

            }
            <Spacer />
            <IconButton icon={<MdDelete />} isRound='true' onClick={() => handleDelete(todo.id)}></IconButton>
            <IconButton icon={<AiFillEdit />} isRound='true' onClick={() => setEdit(!edit)}></IconButton>
            <IconButton icon={<TiTick />} isRound='true' onClick={() => setTicked(!ticked)}></IconButton>
        </HStack>
    )
}

export default OneTodo
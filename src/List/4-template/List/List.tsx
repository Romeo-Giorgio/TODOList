//********** Imports **********//
import { TODO } from "../../../utils/types";
import DoneIcon from "@mui/icons-material/Done";

import { useDispatch, useSelector } from "../../../store";
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { todoGlobalizedSelector, updateTodo } from "../../../redux/todoSlice";
import { useState } from "react";

//********** Component **********//
const ListComponent = () => {
  const todos = useSelector((state) =>
    todoGlobalizedSelector.selectAll(state.todos)
  );
  const dispatch = useDispatch();
  const handleTODOClick = (id: number) => {
    dispatch(updateTodo({ id, changes: { done: true } }));
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo: TODO) => (
        <>
          <ListItem disablePadding id={todo.id.toString()} key={Math.random()}>
            <ListItemButton
              onClick={() => {
                handleTODOClick(todo.id);
              }}
            >
              <ListItemText primary={todo.text} />
            </ListItemButton>
            {todo?.done ? <DoneIcon /> : null}
          </ListItem>
          <Divider />
        </>
      ))}
    </Box>
  );
};
ListComponent.displayName = "ListComponent";
export default ListComponent;

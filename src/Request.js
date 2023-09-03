import React, {useState} from "react"
import {Button, FormControl, InputLabel, List, ListItem, NativeSelect} from "@mui/material";

export default function Request(){
    const [todoList,setTodoList]=useState([])
    const [addItem, setAddItem]=useState("")
    const [addItemErrorText, setAddItemErrorText] = React.useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        setTodoList(todoList.concat(addItem));
        setAddItem("");
        if (!addItem) {
            setAddItemErrorText("Please enter pickup location");
        }
    };
    return (
        <div>
            <input  label="Todo List"
                    id="todoList"
                    name="todoList"
                    className="text-field"
                    value={addItem}
                    error={!!addItemErrorText}
                    helperText={addItemErrorText}
                    onChange={(e) => setAddItem(e.target.value)}/>
            <Button onClick={onSubmit}>
              Add Todo
            </Button>
            <List>
                {todoList.length>0 && todoList.map((navItem) => (
                    <ListItem
                        key={navItem.length}
                    >
                        {navItem}
                    </ListItem>
                ))}
            </List>
            <FormControl halfWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Priority
                </InputLabel>
                <NativeSelect
                    defaultValue={"Low"}
                    inputProps={{
                        name: 'Priority',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={"High"}>High</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"Low"}>Low</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}
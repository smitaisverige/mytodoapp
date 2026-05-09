import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

type TaskFormProps = {
  addTask: (text: string) => void;
};

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [taskText, setTaskText] = useState<string>("");

  const handleSubmit = () => {
    if (taskText.trim() === "") return;

    addTask(taskText);
    setTaskText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 4,
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <TextField
        fullWidth
        label="Enter a task"
        variant="outlined"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
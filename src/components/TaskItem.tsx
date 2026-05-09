import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Task } from "../types/task";
type TaskItemProps = {
  task: Task;
  deleteTask: (id: number) => void;
};

const TaskItem = ({ task, deleteTask }: TaskItemProps) => {
  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
          }}
        >
          <Typography>{task.text}</Typography>

          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
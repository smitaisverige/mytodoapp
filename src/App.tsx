import { useEffect, useState } from "react";
import { Container, Paper, Box } from "@mui/material";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer"; 

import type { Task } from "./types/task";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url('/todo-bg.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    py:5,
  }}
>
 <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Container maxWidth="md">
    <Paper   
      elevation={8}
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
            }}>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </Paper>
  </Container>
</Box>

<Footer />
 
    </Box>
  );
};

export default App;
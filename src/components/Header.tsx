import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
        }}
      >
        My To-Do App
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Organize your daily tasks easily
      </Typography>
    </Box>
  );
};

export default Header;
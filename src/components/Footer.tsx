import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: "center",
        py: 2,
        opacity: 0.7,
      }}
    >
      <Typography variant="body2">
        &copy; Smita's Cat Universe To-do App
      </Typography>
    </Box>
  );
};

export default Footer;
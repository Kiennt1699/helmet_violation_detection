import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  // Try to detect user role for better redirection
  const userRole = localStorage.getItem("user_role");
  
  const handleNavigateHome = () => {
    if (userRole === "Citizen") {
      navigate("/citizen");
    } else if (userRole === "Supervisor" || userRole === "Admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        py: 4
      }}>
        <Paper elevation={3} sx={{ 
          p: 5, 
          textAlign: "center",
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
          borderTop: "5px solid #3f51b5"
        }}>
          <ErrorOutlineIcon sx={{ fontSize: 80, color: "#3f51b5", mb: 2 }} />
          
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            404
          </Typography>
          
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Page Not Found
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </Typography>
          
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleNavigateHome}
              size="large"
            >
              Go to Home
            </Button>
            
            <Button 
              variant="outlined"
              onClick={() => navigate(-1)}
              size="large"
            >
              Go Back
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotFound;
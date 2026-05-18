import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudIcon from "@mui/icons-material/Cloud";

export default function Skills() {
  const items = [
    {
      icon: <SpeedIcon fontSize="large" color="primary" />,
      title: "Adaptable",
      desc: "Whether it's a new framework, API, or workflow - I adapt quickly and get up to speed fast.",
    },
    {
      icon: <CodeIcon fontSize="large" color="primary" />,
      title: "Modern Mindset",
      desc: "Using modern front end techniques and best practices for optimization & and a smooth experience for the user.",
    },
    {
      icon: <CloudIcon fontSize="large" color="primary" />,
      title: "Cloud Solutions",
      desc: "Years of experience working with AWS and Azure services - covering hosting, databases, serverless functions, and security configurations.",
    },
  ];

  return (
    <Box id="skills" sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {items.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                {item.icon}
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
